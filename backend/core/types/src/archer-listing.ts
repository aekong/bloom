import { AmiChart, CountyCode, Listing, ListingStatus } from "./backend-swagger"

const amiChart: AmiChart = {
  id: "somerandomid",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "San Jose TCAC 2019",
  items: [
    {
      percentOfAmi: 120,
      householdSize: 1,
      income: 110400,
    },
    {
      percentOfAmi: 120,
      householdSize: 2,
      income: 126150,
    },
    {
      percentOfAmi: 120,
      householdSize: 3,
      income: 141950,
    },
    {
      percentOfAmi: 120,
      householdSize: 4,
      income: 157700,
    },
    {
      percentOfAmi: 120,
      householdSize: 5,
      income: 170300,
    },
    {
      percentOfAmi: 120,
      householdSize: 6,
      income: 182950,
    },
    {
      percentOfAmi: 120,
      householdSize: 7,
      income: 195550,
    },
    {
      percentOfAmi: 120,
      householdSize: 8,
      income: 208150,
    },
    {
      percentOfAmi: 110,
      householdSize: 1,
      income: 101200,
    },
    {
      percentOfAmi: 110,
      householdSize: 2,
      income: 115610,
    },
    {
      percentOfAmi: 110,
      householdSize: 3,
      income: 130075,
    },
    {
      percentOfAmi: 110,
      householdSize: 4,
      income: 144540,
    },
    {
      percentOfAmi: 110,
      householdSize: 5,
      income: 156090,
    },
    {
      percentOfAmi: 110,
      householdSize: 6,
      income: 167640,
    },
    {
      percentOfAmi: 110,
      householdSize: 7,
      income: 179245,
    },
    {
      percentOfAmi: 110,
      householdSize: 8,
      income: 190795,
    },
    {
      percentOfAmi: 100,
      householdSize: 1,
      income: 92000,
    },
    {
      percentOfAmi: 100,
      householdSize: 2,
      income: 105100,
    },
    {
      percentOfAmi: 100,
      householdSize: 3,
      income: 118250,
    },
    {
      percentOfAmi: 100,
      householdSize: 4,
      income: 131400,
    },
    {
      percentOfAmi: 100,
      householdSize: 5,
      income: 141900,
    },
    {
      percentOfAmi: 100,
      householdSize: 6,
      income: 152400,
    },
    {
      percentOfAmi: 100,
      householdSize: 7,
      income: 162950,
    },
    {
      percentOfAmi: 100,
      householdSize: 8,
      income: 173450,
    },
    {
      percentOfAmi: 80,
      householdSize: 1,
      income: 72750,
    },
    {
      percentOfAmi: 80,
      householdSize: 2,
      income: 83150,
    },
    {
      percentOfAmi: 80,
      householdSize: 3,
      income: 93550,
    },
    {
      percentOfAmi: 80,
      householdSize: 4,
      income: 103900,
    },
    {
      percentOfAmi: 80,
      householdSize: 5,
      income: 112250,
    },
    {
      percentOfAmi: 80,
      householdSize: 6,
      income: 120550,
    },
    {
      percentOfAmi: 80,
      householdSize: 7,
      income: 128850,
    },
    {
      percentOfAmi: 80,
      householdSize: 8,
      income: 137150,
    },
    {
      percentOfAmi: 60,
      householdSize: 1,
      income: 61500,
    },
    {
      percentOfAmi: 60,
      householdSize: 2,
      income: 70260,
    },
    {
      percentOfAmi: 60,
      householdSize: 3,
      income: 79020,
    },
    {
      percentOfAmi: 60,
      householdSize: 4,
      income: 87780,
    },
    {
      percentOfAmi: 60,
      householdSize: 5,
      income: 94860,
    },
    {
      percentOfAmi: 60,
      householdSize: 6,
      income: 101880,
    },
    {
      percentOfAmi: 60,
      householdSize: 7,
      income: 108900,
    },
    {
      percentOfAmi: 60,
      householdSize: 8,
      income: 115920,
    },
    {
      percentOfAmi: 55,
      householdSize: 1,
      income: 56375,
    },
    {
      percentOfAmi: 55,
      householdSize: 2,
      income: 64405,
    },
    {
      percentOfAmi: 55,
      householdSize: 3,
      income: 72435,
    },
    {
      percentOfAmi: 55,
      householdSize: 4,
      income: 80465,
    },
    {
      percentOfAmi: 55,
      householdSize: 5,
      income: 86955,
    },
    {
      percentOfAmi: 55,
      householdSize: 6,
      income: 93390,
    },
    {
      percentOfAmi: 55,
      householdSize: 7,
      income: 99825,
    },
    {
      percentOfAmi: 55,
      householdSize: 8,
      income: 106260,
    },
    {
      percentOfAmi: 50,
      householdSize: 1,
      income: 51250,
    },
    {
      percentOfAmi: 50,
      householdSize: 2,
      income: 58550,
    },
    {
      percentOfAmi: 50,
      householdSize: 3,
      income: 65850,
    },
    {
      percentOfAmi: 50,
      householdSize: 4,
      income: 73150,
    },
    {
      percentOfAmi: 50,
      householdSize: 5,
      income: 79050,
    },
    {
      percentOfAmi: 50,
      householdSize: 6,
      income: 84900,
    },
    {
      percentOfAmi: 50,
      householdSize: 7,
      income: 90750,
    },
    {
      percentOfAmi: 50,
      householdSize: 8,
      income: 96600,
    },
    {
      percentOfAmi: 45,
      householdSize: 1,
      income: 46125,
    },
    {
      percentOfAmi: 45,
      householdSize: 2,
      income: 52695,
    },
    {
      percentOfAmi: 45,
      householdSize: 3,
      income: 59265,
    },
    {
      percentOfAmi: 45,
      householdSize: 4,
      income: 65835,
    },
    {
      percentOfAmi: 45,
      householdSize: 5,
      income: 71145,
    },
    {
      percentOfAmi: 45,
      householdSize: 6,
      income: 76410,
    },
    {
      percentOfAmi: 45,
      householdSize: 7,
      income: 81675,
    },
    {
      percentOfAmi: 40,
      householdSize: 1,
      income: 41000,
    },
    {
      percentOfAmi: 40,
      householdSize: 2,
      income: 46840,
    },
    {
      percentOfAmi: 40,
      householdSize: 3,
      income: 52680,
    },
    {
      percentOfAmi: 40,
      householdSize: 4,
      income: 58520,
    },
    {
      percentOfAmi: 40,
      householdSize: 5,
      income: 63240,
    },
    {
      percentOfAmi: 40,
      householdSize: 6,
      income: 67920,
    },
    {
      percentOfAmi: 40,
      householdSize: 7,
      income: 72600,
    },
    {
      percentOfAmi: 40,
      householdSize: 8,
      income: 77280,
    },
    {
      percentOfAmi: 35,
      householdSize: 1,
      income: 35875,
    },
    {
      percentOfAmi: 35,
      householdSize: 2,
      income: 40985,
    },
    {
      percentOfAmi: 35,
      householdSize: 3,
      income: 46095,
    },
    {
      percentOfAmi: 35,
      householdSize: 4,
      income: 51205,
    },
    {
      percentOfAmi: 35,
      householdSize: 5,
      income: 55335,
    },
    {
      percentOfAmi: 35,
      householdSize: 6,
      income: 59430,
    },
    {
      percentOfAmi: 35,
      householdSize: 7,
      income: 63525,
    },
    {
      percentOfAmi: 35,
      householdSize: 8,
      income: 67620,
    },
    {
      percentOfAmi: 30,
      householdSize: 1,
      income: 30750,
    },
    {
      percentOfAmi: 30,
      householdSize: 2,
      income: 35130,
    },
    {
      percentOfAmi: 30,
      householdSize: 3,
      income: 39510,
    },
    {
      percentOfAmi: 30,
      householdSize: 4,
      income: 43890,
    },
    {
      percentOfAmi: 30,
      householdSize: 5,
      income: 47430,
    },
    {
      percentOfAmi: 30,
      householdSize: 6,
      income: 50940,
    },
    {
      percentOfAmi: 30,
      householdSize: 7,
      income: 54450,
    },
    {
      percentOfAmi: 25,
      householdSize: 1,
      income: 25625,
    },
    {
      percentOfAmi: 25,
      householdSize: 2,
      income: 29275,
    },
    {
      percentOfAmi: 25,
      householdSize: 3,
      income: 32925,
    },
    {
      percentOfAmi: 25,
      householdSize: 4,
      income: 36575,
    },
    {
      percentOfAmi: 25,
      householdSize: 5,
      income: 39525,
    },
    {
      percentOfAmi: 25,
      householdSize: 6,
      income: 42450,
    },
    {
      percentOfAmi: 25,
      householdSize: 7,
      income: 45375,
    },
    {
      percentOfAmi: 25,
      householdSize: 8,
      income: 48300,
    },
    {
      percentOfAmi: 20,
      householdSize: 1,
      income: 20500,
    },
    {
      percentOfAmi: 20,
      householdSize: 2,
      income: 23420,
    },
    {
      percentOfAmi: 20,
      householdSize: 3,
      income: 26340,
    },
    {
      percentOfAmi: 20,
      householdSize: 4,
      income: 29260,
    },
    {
      percentOfAmi: 20,
      householdSize: 5,
      income: 31620,
    },
    {
      percentOfAmi: 20,
      householdSize: 6,
      income: 33960,
    },
    {
      percentOfAmi: 20,
      householdSize: 7,
      income: 36300,
    },
    {
      percentOfAmi: 20,
      householdSize: 8,
      income: 38640,
    },
    {
      percentOfAmi: 15,
      householdSize: 1,
      income: 15375,
    },
    {
      percentOfAmi: 15,
      householdSize: 2,
      income: 17565,
    },
    {
      percentOfAmi: 15,
      householdSize: 3,
      income: 19755,
    },
    {
      percentOfAmi: 15,
      householdSize: 4,
      income: 21945,
    },
    {
      percentOfAmi: 15,
      householdSize: 5,
      income: 23715,
    },
    {
      percentOfAmi: 15,
      householdSize: 6,
      income: 25470,
    },
    {
      percentOfAmi: 15,
      householdSize: 7,
      income: 27225,
    },
    {
      percentOfAmi: 15,
      householdSize: 8,
      income: 28980,
    },
  ],
}

export const ArcherListing: Listing = {
  id: "Uvbk5qurpB2WI9V6WnNdH",
  applicationConfig: undefined,
  applicationOpenDate: new Date("2019-12-31T15:22:57.000-07:00"),
  applicationPickUpAddress: {
    id: "id",
    createdAt: new Date(),
    updatedAt: new Date(),
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  applicationPickUpAddressOfficeHours: "",
  depositMax: "",
  disableUnitsAccordion: false,
  countyCode: CountyCode.Alameda,
  events: [],
  urlSlug: "listing-slug-abcdef",
  whatToExpect: {
    allInfoWillBeVerified: "",
    applicantsWillBeContacted: "",
    bePreparedIfChosen: "",
  },
  status: ListingStatus.active,
  applicationAddress: {
    id: "id",
    createdAt: new Date(),
    updatedAt: new Date(),
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  applicationDueDate: new Date("2019-12-31T15:22:57.000-07:00"),
  applicationMethods: [],
  applicationOrganization: "98 Archer Street",
  // TODO confirm not used anywhere
  // applicationPhone: "(408) 217-8562",
  assets: [
    {
      label: "building",
      fileId:
        "https://regional-dahlia-staging.s3-us-west-1.amazonaws.com/listings/archer/archer-studios.jpg",
    },
  ],
  buildingSelectionCriteria:
    "Tenant Selection Criteria will be available to all applicants upon request.",
  costsNotIncluded:
    "Resident responsible for PG&E, internet and phone.  Owner pays for water, trash, and sewage.  Residents encouraged to obtain renter's insurance but this is not a requirement.  Rent is due by the 5th of each month. Late fee $35 and returned check fee is $35 additional.",
  creditHistory:
    "Applications will be rated on a score system for housing. An applicant's score may be impacted by negative tenant peformance information provided to the credit reporting agency.  All applicants are expected have a passing acore of 70 points out of 100 to be considered for housing.  Applicants with no credit history will receive a maximum of 80 points to fairly outweigh positive and/or negative trades as would an applicant with established credit history. Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process. ",
  depositMin: "1140.0",
  programRules:
    "Applicants must adhere to minimum & maximum income limits. Tenant Selection Criteria applies.",
  // TODO confirm not used anywhere
  // externalId: null,
  waitlistMaxSize: 300,
  name: "Archer Studios",
  waitlistCurrentSize: 300,
  // TODO confirm not used anywhere
  // prioritiesDescriptor: null,
  requiredDocuments: "Completed application and government issued IDs",
  // TODO confirm not used anywhere
  // reservedCommunityMaximumAge: null,
  // TODO confirm not used anywhere
  // reservedCommunityMinimumAge: null,
  // TODO confirm not used anywhere
  // reservedDescriptor: null,
  createdAt: new Date("2019-07-08T15:37:19.565-07:00"),
  updatedAt: new Date("2019-07-09T14:35:11.142-07:00"),
  // TODO confirm not used anywhere
  // groupId: 1,
  // TODO confirm not used anywhere
  // hideUnitFeatures: false,
  applicationFee: "30.0",
  criminalBackground:
    "A criminal background investigation will be obtained on each applicant.  As criminal background checks are done county by county and will be ran for all counties in which the applicant lived,  Applicants will be disqualified for tenancy if they have been convicted of a felony or misdemeanor.  Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process. ",
  leasingAgentAddress: {
    id: "id",
    createdAt: new Date(),
    updatedAt: new Date(),
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  leasingAgentEmail: "mbaca@charitieshousing.org",
  leasingAgentName: "Marisela Baca",
  leasingAgentOfficeHours: "Monday, Tuesday & Friday, 9:00AM - 5:00PM",
  leasingAgentPhone: "(408) 217-8562",
  leasingAgentTitle: "",
  rentalAssistance: "Custom rental assistance",
  rentalHistory:
    "Two years of rental history will be verified with all applicable landlords.  Household family members and/or personal friends are not acceptable landlord references.  Two professional character references may be used in lieu of rental history for applicants with no prior rental history.  An unlawful detainer report will be processed thourhg the U.D. Registry, Inc. Applicants will be disqualified if they have any evictions filing within the last 7 years.  Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process.",
  preferences: [],
  householdSizeMin: 2,
  householdSizeMax: 3,
  smokingPolicy: "Non-smoking building",
  unitsAvailable: 0,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  unitsSummarized: {},
  unitAmenities: "Dishwasher",
  developer: "Charities Housing ",
  yearBuilt: 2012,
  accessibility:
    "There is a total of 5 ADA units in the complex, all others are adaptable. Exterior Wheelchair ramp (front entry)",
  amenities:
    "Community Room, Laundry Room, Assigned Parking, Bike Storage, Roof Top Garden, Part-time Resident Service Coordinator",
  buildingTotalUnits: 35,
  buildingAddress: {
    id: "buildingId",
    createdAt: new Date(),
    updatedAt: new Date(),
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  neighborhood: "Rosemary Gardens Park",
  petPolicy:
    "No pets allowed. Accommodation animals may be granted to persons with disabilities via a reasonable accommodation request.",
  units: [
    {
      id: "sQ19KuyILEo0uuNqti2fl",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-07-09T21:20:05.783Z"),
      updatedAt: new Date("2019-08-14T23:05:43.913Z"),
      amiChart,
    },
    {
      id: "Cq870hwYXcPxCYT4_uW_3",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.982Z"),
      updatedAt: new Date("2019-08-14T23:06:59.015Z"),
      amiChart,
    },
    {
      id: "9XQrfuAPOn8wtD7HlhCTR",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.758Z"),
      updatedAt: new Date("2019-08-14T23:06:59.023Z"),
      amiChart,
    },
    {
      id: "bamrJpZA9JmnLSMEbTlI4",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.766Z"),
      updatedAt: new Date("2019-08-14T23:06:59.031Z"),
      amiChart,
    },
    {
      id: "BCwOFAHJDpyPbKcVBjIUM",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.771Z"),
      updatedAt: new Date("2019-08-14T23:06:59.039Z"),
      amiChart,
    },
    {
      id: "5t56gXJdJLZiksBuX8BtL",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.777Z"),
      updatedAt: new Date("2019-08-14T23:06:59.046Z"),
      amiChart,
    },
    {
      id: "7mmAuJ0x7l_2VxJLoSzX5",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.783Z"),
      updatedAt: new Date("2019-08-14T23:06:59.053Z"),
      amiChart,
    },
    {
      id: "LVsJ-_PYy8x2rn5V8Deo9",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.976Z"),
      updatedAt: new Date("2019-08-14T23:06:59.161Z"),
      amiChart,
    },
    {
      id: "neDXHUzJkL2YZ2CQOZx1i",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.976Z"),
      updatedAt: new Date("2019-08-14T23:06:59.167Z"),
      amiChart,
    },
    {
      id: "3_cr3dd76rGY7tDYlvfEO",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-07-09T21:24:14.122Z"),
      updatedAt: new Date("2019-08-14T23:06:59.173Z"),
      amiChart,
    },
    {
      id: "_38QsH2XMgHEzn_Sn4b2r",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.950Z"),
      updatedAt: new Date("2019-08-14T23:06:59.179Z"),
      amiChart,
    },
    {
      id: "gTHXtJ37uP8R8zkOp7wOt",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.956Z"),
      updatedAt: new Date("2019-08-14T23:06:59.186Z"),
      amiChart,
    },
    {
      id: "me-MRbUEn6ox-OYpzosO1",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.961Z"),
      updatedAt: new Date("2019-08-14T23:06:59.192Z"),
      amiChart,
    },
    {
      id: "ZOtuFSb79LX7p6CVW3H4w",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.967Z"),
      updatedAt: new Date("2019-08-14T23:06:59.198Z"),
      amiChart,
    },
    {
      id: "nISGOCiWoCzQXkMZGV5bV",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.972Z"),
      updatedAt: new Date("2019-08-14T23:06:59.204Z"),
      amiChart,
    },
    {
      id: "Ppne-7ChrEht1HxwfO0gc",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.978Z"),
      updatedAt: new Date("2019-08-14T23:06:59.210Z"),
      amiChart,
    },
    {
      id: "78hBgnEoHw3aW5r4Mn2Jf",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 2,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:55:22.984Z"),
      updatedAt: new Date("2019-08-14T23:06:59.216Z"),
      amiChart,
    },
    {
      id: "0RtHf-Iogw3x643r46y-a",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.563Z"),
      updatedAt: new Date("2019-08-14T23:06:59.222Z"),
      amiChart,
    },
    {
      id: "ENMVc3sX0kmD3G4762naM",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.570Z"),
      updatedAt: new Date("2019-08-14T23:06:59.229Z"),
      amiChart,
    },
    {
      id: "O9OSAiIFTSA5SimFlCbd7",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.575Z"),
      updatedAt: new Date("2019-08-14T23:06:59.235Z"),
      amiChart,
    },
    {
      id: "d_7SUFpxe1rZZ5dIgMgTG",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.580Z"),
      updatedAt: new Date("2019-08-14T23:06:59.241Z"),
      amiChart,
    },
    {
      id: "bR17hir7729c22LyVbQ3m",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.587Z"),
      updatedAt: new Date("2019-08-14T23:06:59.247Z"),
      amiChart,
    },
    {
      id: "B62kKSz7qwAA7aM6tzwtB",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.593Z"),
      updatedAt: new Date("2019-08-14T23:06:59.254Z"),
      amiChart,
    },
    {
      id: "C3YePWy05Or9fDeVuRPTF",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.606Z"),
      updatedAt: new Date("2019-08-14T23:06:59.260Z"),
      amiChart,
    },
    {
      id: "Logk3eY0iXtf3oCOctxqT",
      amiPercentage: "30.0",
      annualIncomeMin: "17256.0",
      monthlyIncomeMin: "1438.0",
      floor: 3,
      annualIncomeMax: "30750.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "719.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:56:06.612Z"),
      updatedAt: new Date("2019-08-14T23:06:59.267Z"),
      amiChart,
    },
    {
      id: "nIYojGurvtF7xelaeT0tN",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.790Z"),
      updatedAt: new Date("2019-08-14T23:06:59.060Z"),
      amiChart,
    },
    {
      id: "omzU7rRoirKXq8SQfaShf",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.796Z"),
      updatedAt: new Date("2019-08-14T23:06:59.067Z"),
      amiChart,
    },
    {
      id: "IzVtblU-KMTHf3wPGzx2g",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.802Z"),
      updatedAt: new Date("2019-08-14T23:06:59.074Z"),
      amiChart,
    },
    {
      id: "7g-6eFE_Q6Xi5K2xT2bE5",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.807Z"),
      updatedAt: new Date("2019-08-14T23:06:59.080Z"),
      amiChart,
    },
    {
      id: "4Br-28LII41R3pINIzLwe",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.813Z"),
      updatedAt: new Date("2019-08-14T23:06:59.086Z"),
      amiChart,
    },
    {
      id: "5bvjTW2ATEpxwsKppCh0l",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:52:08.819Z"),
      updatedAt: new Date("2019-08-14T23:06:59.093Z"),
      amiChart,
    },
    {
      id: "BZlMmnCXwT4bChrcaNUW3",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.921Z"),
      updatedAt: new Date("2019-08-14T23:06:59.099Z"),
      amiChart,
    },
    {
      id: "j2hU6Qv5ayOHMKPLQBolz",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.927Z"),
      updatedAt: new Date("2019-08-14T23:06:59.105Z"),
      amiChart,
    },
    {
      id: "w2-TtBySVELMWyL1cLTkA",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.933Z"),
      updatedAt: new Date("2019-08-14T23:06:59.111Z"),
      amiChart,
    },
    {
      id: "YhC6LoOIT6hxPfk4uKU3m",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.938Z"),
      updatedAt: new Date("2019-08-14T23:06:59.118Z"),
      amiChart,
    },
    {
      id: "5CuSFqgGgFX245JQsnG84",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.944Z"),
      updatedAt: new Date("2019-08-14T23:06:59.124Z"),
      amiChart,
    },
    {
      id: "WoD20A8q1CZm8NmGvLHUn",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.950Z"),
      updatedAt: new Date("2019-08-14T23:06:59.130Z"),
      amiChart,
    },
    {
      id: "srzDhzV5HQpqR5vuyHKlQ",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.955Z"),
      updatedAt: new Date("2019-08-14T23:06:59.136Z"),
      amiChart,
    },
    {
      id: "b9jo7kYEOQcATHWBjwJ6r",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.960Z"),
      updatedAt: new Date("2019-08-14T23:06:59.142Z"),
      amiChart,
    },
    {
      id: "i5tQbXCZRrU_X3ultDSii",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.965Z"),
      updatedAt: new Date("2019-08-14T23:06:59.148Z"),
      amiChart,
    },
    {
      id: "mrRtN0rArISKnE-PFomth",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      sqFeet: "285",
      status: "occupied",
      unitType: "studio",
      createdAt: new Date("2019-08-14T22:53:09.970Z"),
      updatedAt: new Date("2019-08-14T23:06:59.155Z"),
      amiChart,
    },
  ],
  // TODO confirm not used anywhere
  // totalUnits: 2,
}
