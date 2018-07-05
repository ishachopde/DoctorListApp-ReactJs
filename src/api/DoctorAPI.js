 const doctors =  [
    {
        id: "1",
        gender: 'male',
        name: "Dr. Ruben Den",
        email: "ruben.dean@example.com",
        speciality: 'Ophthalmologist',


    },

    {
        id: "2",
        gender: "Female",
        name: "Dr. Kia travis",
        email: "kia.travis@xyz.com",
        speciality: "Ophthalmologist",

    },

    {
        id:"3",
        gender: "Female",
        name: "Dr. Stacy Josh",

        email: "stacy.josh@example.com",
        speciality: "Gynaecologist"

    },

    {
        id:"4",
        gender: "male",
        name: "Dr. Kevin Bernard",
        email: "kevin.bernard@example.com",
        speciality: "Ophthalmologist"

    },

    {
        id:"5",
        gender: "male",
        name: "Dr. Trek Deanson",
        email: "tredson@example.com",
        speciality: "Gynaecologist"

    },

    {
        id:"6",
        gender: "male",
        name: "Dr. Ray Brown",

        email: "brownray@abc.com",
        speciality: "Ophthalmologist"

    },

    {
        id:"7",
        gender: "Female",
        name: "Dr. Pully Thompson Stuart",
        email: "pullthompstuart@example.com",
        speciality: "Ophthalmologist"

    },
     {
         id: "8",
         gender: 'male',
         name: "Dr. Ira Xaviers",
         email: "dr.ixv@example.com",
         speciality: 'Paediatrician',


     },

     {
         id: "9",
         gender: "Female",
         name: "Dr. Rubal Gosh",
         email: "GoshRubalAnnie@xyz.com",
         speciality: "Gynaecologist",

     },

     {
         id:"10",
         gender: "Female",
         name: "Dr. Lira K",

         email: "dr.lirakay@example.com",
         speciality: "Paediatrician"

     },

     {
         id:"11",
         gender: "male",
         name: "Dr. Barnie Smogs",
         email: "barniesmogs@example.com",
         speciality: "Paediatrician"

     },

     {
         id:"12",
         gender: "male",
         name: "Dr. Trevor troy",
         email: "trevortoy@example.com",
         speciality: "Gynaecologist"

     },

     {
         id:"13",
         gender: "male",
         name: "Dr. Cumins Donald Robinson",

         email: "cumindonrob@abc.com",
         speciality: "Paediatrician"

     },

     {
         id:"14",
         gender: "Female",
         name: "Dr. Theresa Morgan",
         email: "leexumorgan@example.com",
         speciality: "Opthalmologist"

     },
];

export const getSimilarDoctors = (id, spec) => {
    return doctors.filter((doctor) => doctor.speciality === spec && doctor.id !== id)
};
export const listDoctor = () => {
    return doctors;
}

export const getDoctorInfo = (id) => {
   return doctors.find((doctor) => doctor.id === id);
}


