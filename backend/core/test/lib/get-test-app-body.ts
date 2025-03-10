import {
  ApplicationStatus,
  ApplicationSubmissionType,
  ApplicationUpdate,
  IncomePeriod,
  Language,
} from "../../types"

export const getTestAppBody: (listingId?: string) => ApplicationUpdate = (listingId?: string) => {
  return {
    appUrl: "",
    listing: {
      id: listingId,
    },
    language: Language.en,
    status: ApplicationStatus.submitted,
    submissionType: ApplicationSubmissionType.electronical,
    acceptedTerms: false,
    applicant: {
      firstName: "Applicant",
      middleName: "Middlename",
      lastName: "lastName",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
      emailAddress: "test@email.com",
      noEmail: false,
      phoneNumber: "",
      phoneNumberType: "",
      noPhone: false,
      workInRegion: null,
      address: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        county: "",
        latitude: null,
        longitude: null,
      },
      workAddress: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        county: "",
        latitude: null,
        longitude: null,
      },
    },
    additionalPhone: true,
    additionalPhoneNumber: "12345",
    additionalPhoneNumberType: "cell",
    contactPreferences: ["a", "b"],
    householdSize: 1,
    housingStatus: "status",
    sendMailToMailingAddress: true,
    mailingAddress: {
      street: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    alternateAddress: {
      street: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    alternateContact: {
      type: "",
      otherType: "",
      firstName: "",
      lastName: "",
      agency: "",
      phoneNumber: "",
      emailAddress: "alternate@contact.com",
      mailingAddress: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
    },
    accessibility: {
      mobility: null,
      vision: null,
      hearing: null,
    },
    demographics: {
      ethnicity: "",
      race: "",
      gender: "",
      sexualOrientation: "",
      howDidYouHear: [],
    },
    incomeVouchers: true,
    income: "100.00",
    incomePeriod: IncomePeriod.perMonth,
    householdMembers: [],
    preferredUnit: ["a", "b"],
    preferences: [],
  }
}
