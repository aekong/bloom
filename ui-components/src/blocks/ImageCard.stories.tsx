import * as React from "react"
import { ImageCard } from "./ImageCard"
import { Listing } from "@bloom-housing/backend-core/types"
import { ArcherListing } from "@bloom-housing/backend-core/types/src/archer-listing"
import { t } from "../helpers/translator"
import { ApplicationStatusType } from "../global/ApplicationStatusType"

const listing = Object.assign({}, ArcherListing) as Listing

export default {
  title: "Blocks/Image Card",
  decorators: [(storyFn: any) => <div style={{ maxWidth: "700px" }}>{storyFn()}</div>],
}

export const imageWithTitle = () => <ImageCard imageUrl="/images/listing.jpg" title="Hello World" />

export const imageWithTitleAndSubtitle = () => (
  <ImageCard
    imageUrl="/images/listing.jpg"
    title="Hello World"
    subtitle="55 Triton Park Lane, Foster City CA, 94404"
  />
)

export const withLink = () => (
  <ImageCard href="/listings" imageUrl="/images/listing.jpg" title="Hello World" />
)

export const withListing = () => (
  <ImageCard
    href="/listings"
    imageUrl="/images/listing.jpg"
    title="Hello World"
    appStatus={ApplicationStatusType.Closed}
    appStatusContent={t("listings.applicationsClosed")}
  />
)

export const withDescriptionAsAlt = () => (
  <ImageCard
    imageUrl="/images/listing.jpg"
    title="Hello World"
    description="An image of the building"
  />
)

export const withListingAndTag = () => (
  <ImageCard
    href="/listings"
    imageUrl="/images/listing.jpg"
    title="Hello World"
    subtitle="55 Triton Park Lane, Foster City CA, 94404"
    tagLabel="Label"
    appStatus={ApplicationStatusType.Closed}
    appStatusContent={t("listings.applicationsClosed")}
  />
)
