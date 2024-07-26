// using promises
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)); //advanced syntax hai
  };
};

export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {} // function ko ek aur function me pass krvna hai to aise
// const asyncHandler = (func) => async () => {} // aur usko async banana hai to aaise

// this is a wrapper function with try catch syntax
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
