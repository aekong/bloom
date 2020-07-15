/*
5.3 Terms
View of application terms with checkbox
*/
import Link from "next/link"
import Router from "next/router"
import {
  Button,
  FormCard,
  ProgressNav,
  t,
  ConfigContext,
  UserContext
} from "@bloom-housing/ui-components"
import FormsLayout from "../../../layouts/forms"
import { useForm } from "react-hook-form"
import { AppSubmissionContext } from "../../../lib/AppSubmissionContext"
import ApplicationConductor from "../../../lib/ApplicationConductor"
import React, { useContext } from "react"
import Markdown from "markdown-to-jsx"
import * as ApiClient from "@bloom-housing/backend-core/client"

export default () => {
  const context = useContext(AppSubmissionContext)
  const { apiUrl } = useContext(ConfigContext)
  const { accessToken, profile } = useContext(UserContext)

  const { application, listing } = context
  const conductor = new ApplicationConductor(application, listing, context)
  const currentPageStep = 5

  /* Form Handler */
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    application.completedStep = 5
    ApiClient.ApplicationsService.create(
      {
        body: {
          application,
          listing: {
            // TODO determine where does the listing data come from
            id: listing.id,
          },
          user: {
            //  TODO How to handle undefined profile
            id: profile.id,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((result) => {
      conductor.sync()
      Router.push("/applications/review/confirmation").then(() => window.scrollTo(0, 0))
    })
  }

  return (
    <FormsLayout>
      <FormCard header="LISTING">
        <ProgressNav
          currentPageStep={currentPageStep}
          completedSteps={application.completedStep}
          totalNumberOfSteps={conductor.totalNumberOfSteps()}
          labels={["You", "Household", "Income", "Preferences", "Review"]}
        />
      </FormCard>

      <FormCard>
        <p className="form-card__back">
          <strong>
            {/* TODO Is going back to /review/review correct? There is no such page now but GH issues
                TODO do to mention such one. */}
            <Link href="/applications/review/review">{t("t.back")}</Link>
          </strong>
        </p>

        <div className="form-card__lead border-b">
          <h2 className="form-card__title is-borderless mt-4">
            {t("application.review.terms.title")}
          </h2>
        </div>
        <form id="review-terms" className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-card__pager-row">
            <Markdown options={{ disableParsingRawHTML: false }}>
              {t("application.review.terms.text", { applicationDueDate: "Oct 4, 2020" })}
            </Markdown>
            <div className="field mt-4 flex flex-row flex-no-wrap">
              <input className="inline-block" type="checkbox" id="agree" name="agree" ref={register} />
              <label htmlFor="agree" className="text-primary font-semibold inline-block">
                {t("application.review.terms.confirmCheckboxText")}
              </label>
            </div>
          </div>
          <div className="form-card__pager">
            <div className="form-card__pager-row primary">
              <Button
                filled={true}
                onClick={() => {
                  //
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </FormCard>
    </FormsLayout>
  )
}
