import React, { useMemo, useCallback } from "react"
import { t, GridSection, ViewItem, GridCell, Field } from "@bloom-housing/ui-components"
import { useFormContext } from "react-hook-form"
import { Preference, FormMetadataOptions, InputType } from "@bloom-housing/backend-core/types"
import { FormAddress } from "../FormAddress"

type FormPreferencesProps = {
  preferences: Preference[]
}

const PREFERENCES_FORM_PATH = "application.preferences"

const FormPreferences = ({ preferences }: FormPreferencesProps) => {
  const formMethods = useFormContext()

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, setValue, watch } = formMethods

  const buildOptionName = useCallback((metaKey: string, option: string) => {
    return `${PREFERENCES_FORM_PATH}.${metaKey}.${option}.claimed`
  }, [])

  const allOptionFieldNames = useMemo(() => {
    const keys = []
    preferences?.forEach((preference) =>
      preference?.formMetadata.options.forEach((option) =>
        keys.push(buildOptionName(preference?.formMetadata.key, option.key))
      )
    )

    return keys
  }, [preferences, buildOptionName])

  const watchPreferences = watch(allOptionFieldNames)

  function uncheckPreference(metaKey: string, options: FormMetadataOptions[]) {
    const preferenceKeys = options?.map((option) => option.key)
    preferenceKeys.forEach((k) => setValue(buildOptionName(metaKey, k), false))
  }

  const createExtraDataFields = useCallback(
    (metaKey: string, optionKey: string, extraKey: string, type: InputType) => {
      const FIELD_NAME = `${PREFERENCES_FORM_PATH}.${metaKey}.${optionKey}.${extraKey}`

      return (
        <div className="my-4" key={FIELD_NAME}>
          {(() => {
            if (type === InputType.text) {
              return (
                <Field
                  id={FIELD_NAME}
                  name={FIELD_NAME}
                  type="text"
                  label={t(`application.preferences.options.${extraKey}`)}
                  register={register}
                />
              )
            }

            if (type === InputType.address) {
              return FormAddress(
                t("application.contact.address"),
                FIELD_NAME,
                "preference",
                register
              )
            }
          })()}
        </div>
      )
    },
    [register]
  )

  return (
    <GridSection title={t("application.details.preferences")} separator grid={false}>
      <GridSection columns={2}>
        {preferences?.map((preference) => (
          <GridCell key={preference.id}>
            <ViewItem label={preference.title}>
              <fieldset className="mt-4">
                {preference.formMetadata?.options?.map((option) => {
                  return (
                    <React.Fragment key={option.key}>
                      <Field
                        id={buildOptionName(preference.formMetadata.key, option.key)}
                        name={buildOptionName(preference.formMetadata.key, option.key)}
                        type="checkbox"
                        label={t(`application.preferences.options.${option.key}`)}
                        register={register}
                        inputProps={{
                          onChange: () => {
                            setValue(`${preference.formMetadata.key}-none`, false)
                          },
                        }}
                      />
                      {watchPreferences[buildOptionName(preference.formMetadata.key, option.key)] &&
                        option.extraData?.map((extra) =>
                          createExtraDataFields(
                            preference.formMetadata.key,
                            option.key,
                            extra.key,
                            extra.type
                          )
                        )}
                    </React.Fragment>
                  )
                })}
                <Field
                  id={`${preference.formMetadata.key}-none`}
                  name={`${preference.formMetadata.key}-none`}
                  type="checkbox"
                  label={t("t.none")}
                  register={register}
                  inputProps={{
                    onChange: () =>
                      uncheckPreference(
                        preference.formMetadata.key,
                        preference.formMetadata?.options
                      ),
                  }}
                />
              </fieldset>
            </ViewItem>
          </GridCell>
        ))}
      </GridSection>
      {/* {console.log(preferences)} */}
    </GridSection>
  )
}

export { FormPreferences as default, FormPreferences }
