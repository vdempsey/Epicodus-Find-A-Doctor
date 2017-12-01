var apiKey = require('./../.env').apiKey;

export class Doctor {
  constructor(condition){
    this.condition = condition;
  }

  apiConstructor(displayData) {
    let yourCondition = this.condition;
    let getDoctors = $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + yourCondition + "&location=45.512794,-122.676483,100&user_location=45.512794,-122.676483&user_key=" + apiKey).then(function(results) {

      // console.log(data.profile.first_name);
      displayData(results);
    })
    .fail(function() {
      alert('Something went wrong');
    });

  }

    // data.practices.within_search_area

}


// Practice
// accepts_new_patients (boolean, optional): True indicates that the practice is accepting new patients. ,

// visit_address (StreetAddress, optional): The street address of the practice's physical location. ,

// phones (Array[PhoneNumber], optional): A list of phone numbers to the practice. ,






//
// {
//   "meta": {
//     "data_type": "string",
//     "item_type": "string",
//     "total": 0,
//     "count": 0,
//     "skip": 0,
//     "limit": 0,
//     "fields_requested": "string",
//     "ignored_query_parameters": [
//       "string"
//     ]
//   },
//   "data": [
//     {
//       "practices": [
//         {
//           "location_slug": "string",
//           "within_search_area": true,
//           "name": "string",
//           "website": {},
//           "email": {},
//           "accepts_new_patients": true,
//           "image_urls": ["string"],
//           "insurance_uids": ["string"],
//           "visit_address": {
//             "city": "string",
//             "state": "string",
//             "state_long": "string",
//             "street": "string",
//             "street2": "string",
//             "zip": "string"
//           },
//           "office_hours": ["string"],
//           "phones": [
//             {"number": "string", "type": "string" }
//           ],
//           "languages": [
//             {
//               "name": "string",
//               "code": "string"
//             }
//           ],
//           "media": [
//             {
//               "uid": "string",
//               "status": "string",
//               "url": "string",
//               "tags": [
//                 "string"
//               ],
//               "versions": {
//                 "thumbnail": "string",
//                 "thumbnail2x": "string",
//                 "small": "string",
//                 "medium": "string",
//                 "large": "string",
//                 "hero": "string"
//               }
//             }
//           ],
//           "total_doctors": 0,
//           "doctors_pagination_url": "string",
//           "doctors": [
//             {
//               "educations": [
//                 {
//                   "school": {},
//                   "graduation_year": {},
//                   "degree": "string"
//                 }
//               ],
//               "profile": {
//                 "first_name": "string",
//                 "middle_name": {},
//                 "last_name": "string",
//                 "slug": "string",
//                 "title": "string",
//                 "image_url": "string",
//                 "gender": "male",
//                 "languages": [
//                   {
//                     "name": "string",
//                     "code": "string"
//                   }
//                 ],
//                 "bio": "string"
//               },
//               "ratings": [
//                 {
//                   "active": true,
//                   "provider": "string",
//                   "provider_uid": "string",
//                   "provider_url": "string",
//                   "rating": 0,
//                   "review_count": 0,
//                   "image_url_small": "string",
//                   "image_url_small_2x": "string",
//                   "image_url_large": "string",
//                   "image_url_large_2x": "string"
//                 }
//               ],
//               "insurances": [
//                 {
//                   "insurance_plan": {
//                     "uid": "string",
//                     "name": "string",
//                     "category": [
//                       "string"
//                     ]
//                   },
//                   "insurance_provider": {
//                     "uid": "string","name": "string"}
//                 }
//               ],
//               "specialties": [
//                 {  "uid": "string","name": "string",  "description": {},  "category": "string",  "actor": "string","actors": "string"
//                 }
//               ],
//               "hospital_affiliations": [
//                 {
//                   "uid": "string",
//                   "name": "string",
//                   "type": "string",
//                   "address": {
//                     "city": "string",
//                     "lat": 0,
//                     "lon": 0,
//                     "slug": {},
//                     "state": "string",
//                     "state_long": "string",
//                     "street": "string",
//                     "street2": "string",
//                     "zip": "string"
//                   },
//                   "phone": {
//                     "number": "string",
//                     "type": "string"
//                   }
//                 }
//               ],
//               "group_affiliations": [
//                 {
//                   "uid": "string",
//                   "name": "string",
//                   "type": "string",
//                   "address": {
//                     "city": "string",
//                     "lat": 0,
//                     "lon": 0,
//                     "slug": {},
//                     "state": "string",
//                     "state_long": "string",
//                     "street": "string",
//                     "street2": "string",
//                     "zip": "string"
//                   },
//                   "phone": {
//                     "number": "string",
//                     "type": "string"
//                   }
//                 }
//               ],
//               "claims": [
//                 {
//                   "hcpcs": "string",
//                   "hcpcs_description": "string",
//                   "service_cnt": 0,
//                   "bene_uniq_cnt": 0,
//                   "avg_allowed_amt": 0,
//                   "avg_charge_amt": 0,
//                   "avg_payment_amt": 0
//                 }
//               ],
//               "licenses": [
//                 {
//                   "number": {},
//                   "state": {},
//                   "end_date": {}
//                 }
//               ],
//               "uid": "string",
//               "npi": "string"
//             }
//           ]
//         }
//       ],
//       "educations": [
//         {
//           "school": {},
//           "graduation_year": {},
//           "degree": "string"
//         }
//       ],
//       "profile": {
//         "first_name": "string",
//         "middle_name": {},
//         "last_name": "string",
//         "slug": "string",
//         "title": "string",
//         "image_url": "string",
//         "gender": "male",
//         "languages": [
//           {
//             "name": "string",
//             "code": "string"
//           }
//         ],
//         "bio": "string"
//       },
//       "ratings": [
//         {
//           "active": true,
//           "provider": "string",
//           "provider_uid": "string",
//           "provider_url": "string",
//           "rating": 0,
//           "review_count": 0,
//           "image_url_small": "string",
//           "image_url_small_2x": "string",
//           "image_url_large": "string",
//           "image_url_large_2x": "string"
//         }
//       ],
//       "insurances": [
//         {
//           "insurance_plan": {
//             "uid": "string",
//             "name": "string",
//             "category": [
//               "string"
//             ]
//           },
//           "insurance_provider": {
//             "uid": "string",
//             "name": "string"
//           }
//         }
//       ],
//       "specialties": [
//         {
//           "uid": "string",
//           "name": "string",
//           "description": {},
//           "category": "string",
//           "actor": "string",
//           "actors": "string"
//         }
//       ],
//       "hospital_affiliations": [
//         {
//           "uid": "string",
//           "name": "string",
//           "type": "string",
//           "address": {
//             "city": "string",
//             "lat": 0,
//             "lon": 0,
//             "slug": {},
//             "state": "string",
//             "state_long": "string",
//             "street": "string",
//             "street2": "string",
//             "zip": "string"
//           },
//           "phone": {
//             "number": "string",
//             "type": "string"
//           }
//         }
//       ],
//       "group_affiliations": [
//         {
//           "uid": "string",
//           "name": "string",
//           "type": "string",
//           "address": {
//             "city": "string",
//             "lat": 0,
//             "lon": 0,
//             "slug": {},
//             "state": "string",
//             "state_long": "string",
//             "street": "string",
//             "street2": "string",
//             "zip": "string"
//           },
//           "phone": {
//             "number": "string",
//             "type": "string"
//           }
//         }
//       ],
//       "claims": [
//         {
//           "hcpcs": "string",
//           "hcpcs_description": "string",
//           "service_cnt": 0,
//           "bene_uniq_cnt": 0,
//           "avg_allowed_amt": 0,
//           "avg_charge_amt": 0,
//           "avg_payment_amt": 0
//         }
//       ],
//       "licenses": [
//         {
//           "number": {},
//           "state": {},
//           "end_date": {}
//         }
//       ],
//       "uid": "string",
//       "npi": "string"
//     }
//   ]
// }
