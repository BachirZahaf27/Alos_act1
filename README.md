# Activite-01
### I) Exercice A rendre sur Moodle:


1) To see only the first 10 values we can use this request :

       GET  http://localhost:3000/newspapers?_limit=10
       
2) To see only the data that starts with the letter M we can use this request :
      
       GET  http://localhost:3000/newspapers 
       
       response.body.filter((newspapers) => newspapers.name.startsWith("M")
       
### II) Tools to made the Activite-01:
       
       https://app.gitbook.com/s/72ne90loNsZWwN0WD79t/reference/api-reference/tools
       
### III) Progress of the API check this repositorie:

      https://github.com/BachirZahaf27/Live-Climate-Change-API
      
      
### IV) Documentation:

       https://bachir-zahaf.gitbook.io/live-climate-change-api/
