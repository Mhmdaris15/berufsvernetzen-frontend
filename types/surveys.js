export const json = {
  title: "Study Tracer Form",
  logoPosition: "right",
  pages: [
    {
      name: "Alumni Information",
      elements: [
        {
          type: "panel",
          name: "alumni-information",
          elements: [
            {
              type: "text",
              name: "first-name",
              title: "First name",
            },
            {
              type: "text",
              name: "last-name",
              startWithNewLine: false,
              title: "Last name",
            },
            {
              type: "radiogroup",
              name: "gender",
              title: "What's your gender?",
              choices: [
                {
                  value: "male",
                  text: "Male",
                },
                {
                  value: "female",
                  text: "Female",
                },
              ],
              colCount: 1,
            },
            {
              type: "dropdown",
              name: "department",
              title: "What is your department?",
              choices: [
                {
                  value: "bisnis-kontruksi-dan-properti",
                  text: "Bisnis Kontruksi dan Properti (Construction and Property Business)",
                },
                {
                  value: "desain-pemodelan-informasi-bangunan",
                  text: "Desain Pemodelan Informasi Bangunan (Building Information Modeling Design)",
                },
                {
                  value: "rekayasa-perangkat-lunak",
                  text: "Rekayasa Perangkat Lunak (Software Engineering)",
                },
                {
                  value: "sistem-informasi-jaringan-dan-aplikasi",
                  text: "Sistem Informasi Jaringan dan Aplikasi (Network and Application Information System)",
                },
                {
                  value: "teknik-komputer-dan-jaringan",
                  text: "Teknik Komputer dan Jaringan (Computer and Network Engineering)",
                },
                {
                  value: "teknik-pemesinan",
                  text: "Teknik Pemesinan (Machining Engineering)",
                },
                {
                  value: "teknik-otomasi-industri",
                  text: "Teknik Otomasi Industri (Industrial Automation Engineering)",
                },
                {
                  value: "teknik-kendaraan-ringan",
                  text: "Teknik Kendaraan Ringan (Light Vehicle Engineering)",
                },
                {
                  value: "teknik-fabrikasi-logam-dan-manufaktur",
                  text: "Teknik Fabrikasi Logam dan Manufaktur (Metal Fabrication and Manufacturing Engineering)",
                },
              ],
            },
            {
              type: "text",
              name: "nik",
              title: "NIK",
              requiredErrorText: "You NIK must be a 16-digit number.",
              validators: [
                {
                  type: "regex",
                  text: "Your NIS must be a 16-digit number",
                  regex: "^[0-9]{16}$",
                },
              ],
              maxLength: 16,
            },
            {
              type: "text",
              name: "birthdate",
              startWithNewLine: false,
              title: "Date of birth",
              inputType: "date",
              maxValueExpression: "today()",
            },
            {
              type: "text",
              name: "graduation-year",
              title: "Year of graduation",
            },
            {
              type: "panel",
              name: "status-after-graduation",
              title: "Activity after graduation",
              elements: [
                {
                  type: "radiogroup",
                  name: "status",
                  title: "What's your current status?",
                  requiredErrorText: "Please select your current status.",
                  isRequired: true,
                  choices: [
                    {
                      value: "working",
                      text: "Working",
                    },
                    {
                      value: "studying",
                      text: "Study Bachelor",
                    },
                    {
                      value: "entrepreneur",
                      text: "Entrepreneur",
                    },
                    {
                        value: "unemployed",
                        text: "Unemployed",
                    },
                  ],
                },
              ],

            }
          ],
        },
      ],
      title: "Alumni Information",
    },   
    {
      name: "current-company",
      elements: [
        {
          type: "panel",
          name: "current-company",
          elements: [
            {
              type: "panel",
              name: "company-name",
              elements: [
                {
                  type: "text",
                  name: "company-name",
                  title: "Company Name",
                  requiredErrorText: "Please enter your company name.",
                  validators: [
                    {
                      type: "text",
                      text: "Please enter your company name.",
                    },
                  ],
                },
                
             
            {
              type: "dropdown",
              name: "industry-sector",
              title: "Industry Sector",
              choices: [
                {
                  value: "agriculture",
                  text: "Sesuai kompetensi Pertanian dan Pertenakan",
                },
                {
                  value: "forestry",
                  text: "Sesuai kompetensi Kehutanan dan Perikanan",
                },
                {
                  value: "mining",
                  text: "Sesuai kompetensi Pertambangan dan Energi",
                },
                {
                  value: "construction",
                  text: "Sesuai kompetensi Konstruksi dan Bangunan",
                },
                {
                  value: "electricity",
                  text: "Sesuai kompetensi Listrik dan Gas",
                },
                {
                  value: "marketing",
                  text: "Sesuai kompetensi Perdagangan, hotel dan restoran",
                },
                {
                  value: "transportation",
                  text: "Sesuai kompetensi Transportasi dan Komunikasi",
                },
                {
                  value: "finance",
                  text: "Sesuai kompetensi Keuangan, real estate dan jasa perusahaan",
                },
                {
                  value:"other",
                  text: "Lainnya"
                }
              ],
            },
            {
              type: "comment",
              name: "other-industry-sector",
              title: "Please specify",
              maxLength: 300,
              visibleIf: "{Industry Sector} = 'other'",
            },
            {
              type: "text",
              name: "Address",
              title: "Address",
              requiredErrorText: "Please enter your company address.",
              validators: [
                {
                  type: "text",
                  text: "Please enter your company address.",
                },
              ],
            },
          ],
        },
           {
            type: "dropdown",
            name: "position",
            title: "Position",
            choices: [
              {
                value: "accounting",
                text: "Akuntan",
              },
              {
                value: "cashier",
                text: "Kasir",
              },
              {
                value: "tour Guide",
                text: "Pemandu Wisata",
              },
              {
                value: "technician",
                text: "Teknisi",
              },
              {
                value: "mechanic",
                text: "Mekanik",
              },
              {
                value: "machine Operator",
                text: "Operator Mesin",
              },
              {
                value: "other",
                text: "Other",
              },
            ],
           },
           {
            type: "comment",
            name: "other-position",
            title: "Please specify",
            maxLength: 100,
            visibleIf: "{Position} = 'other'",
          },
            {
              type: "dropdown",
              name: "employment-status",
              title: "Employment Status",
              choices: [
                {
                  value: "permanent",
                  text: "Karyawan Tetap",
                },
                {
                  value: "contract",
                  text: "Karyawan Kontrak",
                },
                {
                  value: "outsource",
                  text: "Outsourcing",
                },
                {
                  value: "daily-freelance",
                  text: "Tenaga Lepas",
                },
                {
                  value:  "freelance",
                  text: "Bekerja tanpa ikatan kontrak",
                },
                {
                  value: "other",
                  text: "Other",
                },

              ],

            },
            {
              type: "comment",
              name: "other-employment-status",
              title: "Please specify",
              maxLength: 100,
              visibleIf: "{employment-status} = 'other'",
            },
            {
              type: "text",
              name: "amount-of-salary-and-allownce",
              title: "Amount of Salary and Allowance",
              requiredErrorText: "Please enter your amount of salary and allowance.",
              validators: [
                {
                  type: "numeric",
                  text: "Please enter your amount of salary and allowance.",
                },
              ],
            },
            {
              type: "radiogroup",
              name: "opinion-of-the-field-of-study",
              title: "Opinion of the field of study",
              choices: [
                {
                  value: "useful",
                  text: "Sangat berguna",
                },
                {
                  value: "quite-useful",
                  text: "Cukup berguna",
                },
                {
                  value: "less-useful",
                  text: "Kurang berguna",
                },
                {
                  value: "not-useful",
                  text: "Tidak berguna",
                },
              ],
              colCount: 1,
            },
            {
              type: "radiogroup",
              name: "first-job",
              title: "Is this your first job?",
              choices: [
                {
                  value: "yes",
                  text: "Yes",
                },
                {
                  value: "no",
                  text: "No",
                },
              ],
              colCount: 1,
            },
            {
              type: "panel",
              name: "when-did-you-get-your-first-job",
              title: "When did you get your first job?",
              elements: [
                {
                  type: "dropdown",
                  name: "month",
                  title: "Month",
                  choices: [
                    {
                      value: "january",
                      text: "January",
                    },
                    {
                      value: "february",
                      text: "February",
                    },
                    {
                      value: "march",
                      text: "March",
                    },
                    {
                      value: "april",
                      text: "April",
                    },
                    {
                      value: "may",
                      text: "May",
                    },
                    {
                      value: "june",
                      text: "June",
                    },
                    {
                      value: "july",
                      text: "July",
                    },
                    {
                      value: "august",
                      text: "August",
                    },
                    {
                      value: "september",
                      text: "September",
                    },
                    {
                      value: "october",
                      text: "October",
                    },
                    {
                      value: "november",
                      text: "November",
                    },
                    {
                      value: "december",
                      text: "December",
                    },
                  ],
                },
                {
                  type: "text",
                  name: "year",
                  title: "Year",
                  requiredErrorText: "Please enter the year you got your first job.",
                  validators: [
                    {
                      type: "numeric",
                      text: "Please enter the year you got your first job.",
                    },
                  ],
                },
              ],
            },
            {
              type: "radiogroup",
              name: "salary-meet-the-minimum-wage",
              title: "Does your salary meet the minimum wage?",
              choices: [
                {
                  value: "yes",
                  text: "Yes",
                },
                {
                  value: "no",
                  text: "No",
                },
              ],
              colCount: 1,
            }

          ],
        },
      ],
      title: "Work Information",
      visibleIf: "{status} = 'working'",
    },
    {
      name: "Entrepreneur Information",
      elements: [
        {
        type: "panel",
        name: "entrepreneur-information",
        elements: [
          {
            type: "text",
            name: "product-or-service-offered",
            title: "Product or Service Offered",
            requiredErrorText: "Please enter the product or service you offer.",
            validators: [
              {
                type: "text",
                text: "Please enter the product or service you offer.",
              },
            ],
          },
          {
            type: "panel",
            name: "average-profit",
            title: "Average Profit",
            elements: [
              {
                type: "text",
                name: "amount-of-profit",
                title: "Amount of profit in IDR",
                requiredErrorText: "Please enter your amount of profit.",
                validators: [
                  {
                    type: "numeric",
                    text: "Please enter your amount of profit.",
                  },
                ],
              },
              {
                type: "radiogroup",
                name: "unit-of-profit",
                title: "Unit of profit",
                choices: [
                  {
                    value: "month",
                    text: "Perbulan",
                  },
                  {
                    value: "week",
                    text: "Perminggu",
                  },
                  {
                    value: "day",
                    text: "Perhari",
                  },
                ],
                colCount: 1,
              }
             
            ],

          },
          {
            type: 'panel',
            name: 'when-did-you-start-your-business',
            title: 'When did you start your business?',
            elements: [
              {
                type: 'dropdown',
                name: 'month',
                title: 'Month',
                choices: [
                  {
                    value: 'january',
                    text: 'January',
                  },
                  {
                    value: 'february',
                    text: 'February',
                  },
                  {
                    value: 'march',
                    text: 'March',
                  },
                  {
                    value: 'april',
                    text: 'April',
                  },
                  {
                    value: 'may',
                    text: 'May',
                  },
                  {
                    value: 'june',
                    text: 'June',
                  },
                  {
                    value: 'july',
                    text: 'July',
                  },
                  {
                    value: 'august',
                    text: 'August',
                  },
                  {
                    value: 'september',
                    text: 'September',
                  },
                  {
                    value: 'october',
                    text: 'October',
                  },
                  {
                    value: 'november',
                    text: 'November',
                  },
                  {
                    value: 'december',
                    text: 'December',
                  },
                ],
              },
              {
                type: 'text',
                name: 'year',
                title: 'Year',
                requiredErrorText: 'Please enter the year you started your business.',
                validators: [
                  {
                    type: 'numeric',
                    text: 'Please enter the year you started your business.',
                  },
                ],
              },
            ],
          },
        ],
        },

      ],
      title: "Entrepreneur Information",
      visibleIf: "{status} = 'entrepreneur'",
    },
    {
      name: "Study Bachelor Information",
     elements: [
      {
      type: "panel",
      name: "study-bachelor-information",
      elements: [
        {
          type: "dropdown",
          name: "education-level",
          title: "Education Level",
          choices: [
            {
              value: "diploma1/2",
              text: "Diploma1/2",
            },
            {
              value: "diploma3",
              text: "Diploma3",
            },
            {
              value: "diploma4",
              text: "Diploma4",
            },
            {
              value: "bachelor",
              text: "S1",
            },
            {
              value: "master",
              text: "S2",
            },
            {
              value: "other",
              text: "Other",
            },
          ],

        },
        {
          type: "comment",
          name: "other-education-level",
          title: "Please specify",
          maxLength: 100,
          visibleIf: "{education-level} = 'other'",
        },
        {
          type: "text",
          name: "institution",
          title: "Institution Name",
          requiredErrorText: "Please enter the name of your institution.",
          validators: [
            {
              type: "text",
              text: "Please enter the name of your institution.",
            },
          ],
        },
        {
          type: "text",
          name: "Program-of-Study",
          title: "Program of Study",
          requiredErrorText: "Please enter your program study.",
          validators: [
            {
              type: "text",
              text: "Please enter your program study.",
            },
          ],
        },
      ]
      }
      ],
      title: "Study Bachelor Information",
      visibleIf: "{status} = 'studying'",
    },
    {
      name: "Unemployed Information",
      elements: [
        {
          type: "panel",
          name: "unemployed-information",
          elements: [
            {
              type: "dropdown",
              name: "worked-before-or-self-employed",
              title: "Have you ever worked before or been self-employed?",
              choices: [
                {
                  value: "have-worked",
                  text: "Ya, pernah bekerja",
                },
                {
                  value: "have-self-employed",
                  text: "Ya, pernah berwirausaha",
                },
                {
                  value: "never",
                  text: "Tidak",
                },
              ],

            },
            {
              type: "panel",
              name: "time-of-worke-or-self-employed",
              title: "When did you work or self-employed?",
              elements: [
                {
                  type: "dropdown",
                  name: "month",
                  title: "Month",
                  choices: [
                    {
                      value: "january",
                      text: "January",
                    },
                    {
                      value: "february",
                      text: "February",
                    },
                    {
                      value: "march",
                      text: "March",
                    },
                    {
                      value: "april",
                      text: "April",
                    },
                    {
                      value: "may",
                      text: "May",
                    },
                    {
                      value: "june",
                      text: "June",
                    },
                    {
                      value: "july",
                      text: "July",
                    },
                    {
                      value: "august",
                      text: "August",
                    },
                    {
                      value: "september",
                      text: "September",
                    },
                    {
                      value: "october",
                      text: "October",
                    },
                    {
                      value: "november",
                      text: "November",
                    },
                    {
                      value: "december",
                      text: "December",
                    },
                  ],
                },
                {
                  type: "text",
                  name: "year",
                  title: "Year",
                  requiredErrorText: "Please enter the year you worked or self-employed.",
                  validators: [
                    {
                      type: "numeric",
                      text: "Please enter the year you worked or self-employed.",
                    },
                  ],
                },
              ],
            }, 
            {
              type: "panel",
              name: "time-of-unemployed",
              title: "When did you become unemployed?",
              elements: [
                {
                  type: "dropdown",
                  name: "month",
                  title: "Month",
                  choices: [
                    {
                      value: "january",
                      text: "January",
                    },
                    {
                      value: "february",
                      text: "February",
                    },
                    {
                      value: "march",
                      text: "March",
                    },
                    {
                      value: "april",
                      text: "April",
                    },
                    {
                      value: "may",
                      text: "May",
                    },
                    {
                      value: "june",
                      text: "June",
                    },
                    {
                      value: "july",
                      text: "July",
                    },
                    {
                      value: "august",
                      text: "August",
                    },
                    {
                      value: "september",
                      text: "September",
                    },
                    {
                      value: "october",
                      text: "October",
                    },
                    {
                      value: "november",
                      text: "November",
                    },
                    {
                      value: "december",
                      text: "December",
                    },
                  ],
                },
                {
                  type: "text",
                  name: "year",
                  title: "Year",
                  requiredErrorText: "Please enter the year you became unemployed.",
                  validators: [
                    {
                      type: "numeric",
                      text: "Please enter the year you became unemployed.",
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
      title: "Unemployed Information",
      visibleIf: "{status} = 'unemployed'",
    },
    {
      name: "Vocational School Performance",
      elements: [
        {
          type: "panel",
          name: "vocational-school-performance",
          elements: [
            {
              type: "radiogroup",
              name: "quality-of-education",
              title: "How do you rate the quality of education at vocational school?",
              choices: [
                {
                  "value": "excellent",
                  "text": "Sangat Puas",
                },
                {
                  "value": "good",
                  "text": "Puas",
                },
                {
                  "value": "not-satisfied",
                  "text": "Tidak Puas",
                },
                {
                  "value": "poor",
                  "text": "Sangat Tidak Puas",
                },
              ],
            },
            {
              type: "text",
              name: "improvement-suggestions",
              title: "Aspects that most need to be improved",
              requiredErrorText: "Please enter the aspects that most need to be improved.",
              inputType: "text",
              maxLength: 300,
            }
          ],
        }
      ],
      title: "Vocational School Performance",
    },
  ],
  showQuestionNumbers: "off",
};
