const createReflectionQuery = `INSERT INTO
reflections(id, success, low_point, take_away, owner_id, created_date, modified_date)
VALUES($1, $2, $3, $4, $5, $6, $7)
returning *`;

const getAllReflectionQuery = `SELECT * FROM reflections WHERE owner_id = $1`;
const getOneReflectionQuery = `SELECT * FROM reflections WHERE owner_id = $1 AND id = $2`;
const updateReflectionQuery = `UPDATE reflections SET 
success=$1, low_point=$2, take_away=$3, modified_date=$4 
WHERE owner_id=$5 AND id=$6 RETURNING *`;
const deleteReflectionQuery = `DELETE FROM reflections WHERE owner_id = $1 AND id = $2 RETURNING *`;
module.exports = {
  createReflectionQuery,
  getAllReflectionQuery,
  getOneReflectionQuery,
  updateReflectionQuery,
  deleteReflectionQuery 
};
