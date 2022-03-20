const createNewUserQuery = `
    INSERT INTO users (
        id,
        email,
        password,
        created_date,
        modified_date
    ) VALUES ($1, $2, $3, $4, $5)
    RETURNING *
`;
const findUserByEmailQuery = `SELECT * FROM users WHERE email = $1`;

const deleteUserQuery = `DELETE FROM users WHERE id = $1`;

module.exports = { createNewUserQuery, findUserByEmailQuery, deleteUserQuery };
