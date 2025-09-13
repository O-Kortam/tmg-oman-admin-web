"use server";

import { postC4C } from "@/lib/postC4C";
import { ContactFormData } from "@/types/shared";

export async function postContactC4C(payload: ContactFormData) {
  const body = {
    Name: "TMG Oman Website",
    IndividualCustomerFamilyName: payload.name || "0",
    Project_KUT: payload.interested || "0",
    // UnitType_KUT: "101",
    OriginTypeCode: "Z8",
    // GroupCode: "Z001",
    LeadType_KUT: "sales",
    IndividualCustomerAddressCountry: payload.country || "0",
    IndividualCustomerMobile: payload.phone || "0",
    IndividualCustomerEMail: payload.email || "0",
    Note: payload.message || "Created via website form",
    OwnerPartyID: "8000043773",
  };

  return postC4C(body);
}