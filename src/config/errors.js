export default {
  notFoundOne: { statusCode: 404, status: "error", message: "Not found document" },
  notFound: { statusCode: 404, status: "error", message: "Not found documents" },
  incomplete: { statusCode: 400, status: "error", message: "Incomplete values" },
  auth: { statusCode: 401, status: "auth", message: "Invalid credentials" },
  forbidden: { statusCode: 403, status: "forbidden", message: "Not Allowed" }
}