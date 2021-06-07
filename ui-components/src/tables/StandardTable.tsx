import * as React from "react"
import { nanoid } from "nanoid"
import { getTranslationWithArguments } from "../helpers/getTranslationWithArguments"

export interface TableHeaders {
  [key: string]: string
}

export const Row = (props: { id?: string; className?: string; children: React.ReactNode }) => (
  <tr id={props.id} className={props.className}>
    {props.children}
  </tr>
)

export const HeaderCell = (props: { children: React.ReactNode }) => <th>{props.children}</th>

export const Cell = (props: {
  headerLabel?: string
  className?: string
  colSpan?: number
  children: React.ReactNode
}) => (
  <td data-label={props.headerLabel} className={props.className || "p-5"} colSpan={props.colSpan}>
    {props.children}
  </td>
)

export interface StandardTableProps {
  headers: TableHeaders
  data: Record<string, React.ReactNode>[]
  tableClassName?: string
  cellClassName?: string
  responsiveCollapse?: boolean
}

export const StandardTable = (props: StandardTableProps) => {
  const { headers, data, cellClassName } = props

  const headerLabels = Object.values(headers).map((header, index) => {
    const uniqKey = process.env.NODE_ENV === "test" ? `header-${index}` : nanoid()
    return <HeaderCell key={uniqKey}>{getTranslationWithArguments(header)}</HeaderCell>
  })

  const body = data.map((row: Record<string, React.ReactNode>, dataIndex) => {
    // Inject thumbnail class into any images provided in the data
    Object.entries(row).forEach(([key, node]) => {
      if (React.isValidElement(node) && node?.type == "img") {
        row[key] = React.cloneElement(node, {
          ...node.props,
          className: `${node.props.className} table__thumbnail`,
        })
      }
    })

    const rowKey = row["id"]
      ? `row-${row["id"] as string}`
      : process.env.NODE_ENV === "test"
      ? `standardrow-${dataIndex}`
      : nanoid()
    const cols = Object.keys(headers).map((colKey, colIndex) => {
      const uniqKey = process.env.NODE_ENV === "test" ? `standardcol-${colIndex}` : nanoid()
      const cell = row[colKey]
      return (
        <Cell
          key={uniqKey}
          headerLabel={getTranslationWithArguments(headers[colKey])}
          className={cellClassName}
        >
          {cell}
        </Cell>
      )
    })
    return (
      <Row id={rowKey} key={rowKey}>
        {cols}
      </Row>
    )
  })

  const tableClasses = ["w-full", "text-sm"]
  if (props.responsiveCollapse) {
    tableClasses.push("responsive-collapse")
  }
  if (props.tableClassName) {
    tableClasses.push(props.tableClassName)
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table className={tableClasses.join(" ")}>
        <thead>
          <Row>{headerLabels}</Row>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  )
}
