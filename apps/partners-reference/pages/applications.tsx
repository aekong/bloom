import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import moment from "moment"
import Head from "next/head"
import {
  Field,
  PageHeader,
  MetaTags,
  t,
  Button,
  ApiClientContext,
} from "@bloom-housing/ui-components"
import { useApplicationsData } from "../lib/hooks"
import Layout from "../layouts/application"
import { useForm } from "react-hook-form"
import { AgGridReact } from "ag-grid-react"
import { GridApi } from "ag-grid-community"

export default function ApplicationsList() {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, watch } = useForm()
  const [gridApi, setGridApi] = useState<GridApi>(null)
  const { applicationsService } = useContext(ApiClientContext)

  const filterField = watch("filter-input", "")
  const pageSize = watch("page-size", 8)

  const listingId = router.query.id as string

  const [pageIndex, setPageIndex] = useState(1)

  const { appsData, appsLoading, appsError } = useApplicationsData(pageIndex, pageSize, listingId)

  // reset page to 1 when user change limit
  useEffect(() => {
    setPageIndex(1)
  }, [pageSize])

  // fetch data
  const applications = appsData?.items || []
  const appsMeta = appsData?.meta

  const pageSizeOptions = ["8", "100", "500", "1000"]
  const pageJumpOptions = Array.from(Array(appsMeta?.totalPages).keys())?.map((item) => item + 1)

  const onGridReady = (params) => {
    setGridApi(params.api)
  }

  const onBtNext = () => {
    setPageIndex(pageIndex + 1)
  }

  const onBtPrevious = () => {
    setPageIndex(pageIndex - 1)
  }

  const onExport = async () => {
    const content = await applicationsService.listAsCsv()
    const now = new Date()
    const dateString = moment(now).format("YYYY-MM-DD_HH:mm:ss")

    const fileLink = document.createElement("a")
    fileLink.href = "data:text/csv;charset=utf-8," + encodeURI(content)
    fileLink.target = "_blank"
    fileLink.download = `appplications-${listingId}-${dateString}.csv`
    fileLink.click()
  }

  const onSelectionChanged = () => {
    const row = gridApi.getSelectedRows()
    const rowId = row[0].id

    void router.push(`applications/${rowId}`)
  }

  useEffect(() => {
    if (!gridApi) return

    gridApi.setQuickFilter(filterField)
  }, [gridApi, filterField])

  const metaDescription = t("pageDescription.welcome", { regionName: t("region.name") })
  const metaImage = "" // TODO: replace with hero image

  const defaultColDef = {
    resizable: true,
    maxWidth: 300,
  }

  const columnDefs = [
    {
      headerName: "Application Submission Date",
      field: "createdAt",
      sortable: true,
      filter: false,
      pinned: "left",
      autoSizeColumn: true,
      width: 200,
      minWidth: 150,
      sort: "asc",
    },
    {
      headerName: "First Name",
      field: "application.applicant.firstName",
      sortable: true,
      filter: false,
      pinned: "left",
      autoSizeColumn: true,
      width: 125,
      minWidth: 100,
    },
    {
      headerName: "Last Name",
      field: "application.applicant.lastName",
      sortable: true,
      filter: "agTextColumnFilter",
      pinned: "left",
      autoSizeColumn: true,
      width: 125,
      minWidth: 100,
    },
    {
      headerName: "Application Number",
      field: "id",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 120,
      type: "rightAligned",
    },
    {
      headerName: "Household Size",
      field: "application.householdSize",
      sortable: false,
      filter: false,
      width: 125,
      minWidth: 120,
      type: "rightAligned",
    },
    {
      headerName: "Declared Annual Income",
      field: "application.income",
      sortable: false,
      filter: false,
      width: 180,
      minWidth: 150,
      type: "rightAligned",
    },
    {
      headerName: "Requested ADA",
      field: "application.incomeVouchers",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Preference Claimed",
      field: "application.preferences.youHaveClaimed",
      sortable: true,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "Primary DOB",
      field: "application.household.member.dateOfBirth",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "Email",
      field: "application.applicant.emailAddress",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "Phone",
      field: "application.applicant.phoneNumber",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "Residence Address",
      field: "application.applicant.address.street",
      sortable: false,
      filter: false,
      width: 175,
      minWidth: 150,
    },
    {
      headerName: "Residence City",
      field: "application.applicant.address.city",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 120,
    },
    {
      headerName: "Residence State",
      field: "application.applicant.address.state",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Residence Zip",
      field: "application.applicant.address.zipCode",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Mailing Address",
      field: "application.applicant.mailingAddress.street",
      sortable: false,
      filter: false,
      width: 175,
      minWidth: 150,
    },
    {
      headerName: "Mailing City",
      field: "application.applicant.mailingAddress.city",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 120,
    },
    {
      headerName: "Mailing State",
      field: "application.applicant.mailingAddress.state",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Mailing Zip",
      field: "application.applicant.mailingAddress.zipCode",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Work Address",
      field: "application.applicant.workAddress.street",
      sortable: false,
      filter: false,
      width: 175,
      minWidth: 150,
    },
    {
      headerName: "Work City",
      field: "application.applicant.workAddress.city",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 120,
    },
    {
      headerName: "Work State",
      field: "application.applicant.workAddress.state",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Work Zip",
      field: "application.applicant.workAddress.zipCode",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Alt Contact First Name",
      field: "application.alternateContact.firstName",
      sortable: false,
      filter: false,
      autoSizeColumn: true,
      width: 125,
      minWidth: 100,
    },
    {
      headerName: "Alt Contact Last Name",
      field: "application.alternateContact.lastName",
      sortable: false,
      filter: false,
      autoSizeColumn: true,
      width: 125,
      minWidth: 100,
    },
    {
      headerName: "Alt Contact Email",
      field: "application.alternateContact.emailAddress",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "Alt Contact Phone",
      field: "application.alternateContact.phoneNumber",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "HH Member First Name",
      field: "application.householdMember.firstName",
      sortable: false,
      filter: false,
      autoSizeColumn: true,
      width: 125,
      minWidth: 100,
    },
    {
      headerName: "HH Member Last Name",
      field: "application.householdMember.lastName",
      sortable: false,
      filter: false,
      autoSizeColumn: true,
      width: 125,
      minWidth: 100,
    },
    {
      headerName: "HH Member Email",
      field: "application.householdMember.emailAddress",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "HH Member Phone",
      field: "application.householdMember.phoneNumber",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 100,
    },
    {
      headerName: "HH Member Address",
      field: "application.householdMember.address.street",
      sortable: false,
      filter: false,
      width: 175,
      minWidth: 150,
    },
    {
      headerName: "HH Member City",
      field: "application.householdMember.address.city",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 120,
    },
    {
      headerName: "HH Member State",
      field: "application.householdMember.address.state",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "HH Member Zip",
      field: "application.householdMember.address.zipCode",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "HH Member Work Address",
      field: "application.householdMember.workAddress.street",
      sortable: false,
      filter: false,
      width: 175,
      minWidth: 150,
    },
    {
      headerName: "HH Member Work City",
      field: "application.householdMember.workAddress.city",
      sortable: false,
      filter: false,
      width: 150,
      minWidth: 120,
    },
    {
      headerName: "HH Member Work State",
      field: "application.householdMember.workAddress.state",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "HH Member Work Zip",
      field: "application.householdMember.workAddress.zipCode",
      sortable: false,
      filter: false,
      width: 120,
      minWidth: 100,
    },
    {
      headerName: "Listing",
      field: "listing.name",
      sortable: false,
      filter: false,
    },
  ]

  return (
    <Layout>
      {console.log(appsLoading, appsError)}

      <Head>
        <title>{t("nav.siteTitle")}</title>
      </Head>
      <MetaTags title={t("nav.siteTitle")} image={metaImage} description={metaDescription} />
      <PageHeader>Applications Received</PageHeader>

      <section>
        <article className="flex-row flex-wrap relative max-w-screen-xl mx-auto py-8 px-4">
          <div className="ag-theme-alpine ag-theme-bloom">
            <div className="flex justify-between">
              <div className="w-56">
                <Field name="filter-input" register={register} placeholder="Filter" />
              </div>

              <div className="flex-row">
                <Button className="mx-1" onClick={() => false}>
                  Add Application
                </Button>

                <Button className="mx-1" onClick={onExport}>
                  Export
                </Button>
              </div>
            </div>

            <div className="applications-table mt-5">
              <AgGridReact
                defaultColDef={defaultColDef}
                columnDefs={columnDefs}
                rowData={applications}
                domLayout={"autoHeight"}
                headerHeight={83}
                rowHeight={58}
                suppressPaginationPanel={true}
                paginationPageSize={8}
                suppressScrollOnNewData={true}
                onGridReady={onGridReady}
                rowSelection={"single"}
                onSelectionChanged={onSelectionChanged}
              ></AgGridReact>

              <div className="data-pager">
                <Button
                  className="data-pager__previous data-pager__control"
                  onClick={onBtPrevious}
                  disabled={pageIndex === 1}
                >
                  {t("t.previous")}
                </Button>

                <div className="data-pager__control-group">
                  <span className="data-pager__control">
                    <span className="field-label" id="lbTotalPages">
                      {appsMeta?.totalItems}
                    </span>
                    <span className="field-label">Total Applications</span>
                  </span>

                  <span className="field data-pager__control">
                    <label className="field-label font-sans" htmlFor="page-size">
                      Show
                    </label>
                    <select name="page-size" id="page-size" ref={register} defaultValue={8}>
                      {pageSizeOptions.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </span>

                  <span className="field data-pager__control">
                    <label className="field-label font-sans" htmlFor="page-jump">
                      Jump to
                    </label>
                    <select
                      name="page-jump"
                      id="page-jump"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setPageIndex(parseInt(e.target.value))
                      }
                      value={pageIndex}
                    >
                      {pageJumpOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>

                <Button
                  className="data-pager__next data-pager__control"
                  onClick={onBtNext}
                  disabled={appsMeta?.totalPages === pageIndex}
                >
                  {t("t.next")}
                </Button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}
