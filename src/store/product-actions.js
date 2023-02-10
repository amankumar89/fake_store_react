import { productsActions } from './product-slice';
import { uiActions } from './ui-slice';

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      // console.log(data);
      return data;
    };

    try {
      const productsData = await fetchData();
      dispatch(
        productsActions.replaceProduct({
          data: productsData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://ecommerce-store-fd759-default-rtdb.firebaseio.com/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Sending Cart data failed!');
//       }
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         uiActions.showNotification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Added to cart Successfully!',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!',
//         })
//       );
//     }
//   };
// };
