/*  indexed data base  */


function connectData(){
    let db;

    let conn = indexedDB.open('db',1);
    conn.onupgradeneeded = function(){
        db = conn.result;

        if(!db.createObjectStore.contains('users')){
            db.createObjectStore('users',{keyPath:'id'});
        }
    }

    conn.onsuccess = function(){
        db = conn.resut;
        console.log('connexion reussie avec success');
    }
    conn.onerror = function(){
        console.log('connexion echouee');
    }
}