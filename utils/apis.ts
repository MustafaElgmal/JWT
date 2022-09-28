import { sanityClient } from "../client";
import { Internship } from "../types";

export async function getInternShip() {
  let internship;
  try {
    internship = await sanityClient.fetch(
      `*[_type=='internship'] | order(_createdAt desc) [0]`
    );
  } catch (e) {
    console.log(e);
  }
  return internship;
}

export async function getAllInternShip() {
  let internships: Internship[] = [];
  try {
    internships = await sanityClient.fetch(`*[_type=="internship"]`);
  } catch (e) {
    console.log(e);
  }
  return internships;
}
