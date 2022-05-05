// import { useEffect, useState } from "react";


const Profile =()=>{
  //   const [database, setDatabase] = useState();
  // useEffect(() => {
  //   let _database, closed;
  //   const getDatabase = async () => {
  //     const db = await ("my-db", 1, {
  //       upgrade(db) {
  //         db.createObjectStore("my-store");
  //       }
  //     });
  //     if (closed) {
  //       db.close();
  //     } else {
  //       setDatabase(db);
  //       _database = db
  //     }
  //   };

  //   getDatabase();
  //   return () => {
  //     if (_database) {
  //       _database.close();
  //     }
  //     closed = true;
  //   }
  // }, []);
  
    return(
        <main>
           <section>
               <div>
                   <span>
                       Welcome to mt site , WHERE you pay and earn easily
                   </span>
               </div>
           </section>
        </main>
    )
}
export default Profile