# Activite-01
### I) Exercice A rendre sur Moodle:

- To access this part of the api check this link:
  
      https://my-json-server.typicode.com/BachirZahaf27/Activite-01
    
1) To see only the first 10 values we can use this request

       GET  http://localhost:3000/newspapers?_limit=10
       
2) To see only the data that starts with the letter M we can use this request
      
       GET  http://localhost:3000/newspapers?$filter=startswith(name,'M')
      
### II) Progress of the API check this repo:

      https://github.com/BachirZahaf27/Live-Climate-Change-API
