// import React from 'react';

// function UpdateMeal({
//     CloseUpdatePopup,
//     showUpdate,
//     updatedMeal,
//     Restaurants,
//     Categorys}) {
//     const [newMeal, setnewMeal] = useState({});
//     const handelChange = (e) => {
//       setnewMeal({ ...newMeal, [e.target.name]: e.target.value });
//     };
//     useEffect(() => {
//       setnewMeal(updatedMeal);
//     }, [showUpdate, CloseUpdatePopup]);
//     const handelSubmit = () => {
//       try {
//         API.patch(`meal/${updatedMeal._id}`, newMeal).then(
//           () => {
//             CloseUpdatePopup();
//           }
//         );
//       } catch (error) {
//         if (error.response) {
//           console.log(error.response.data.message);
//         }
//         console.log(error.message);
//       }
//     };


















// const AddArticle = () => {
//   return (
//     <div>
//         <h1> heyy </h1>
//     </div>
//   );
// }

// export default AddArticle;
