const { v4: uuIdv4 } = require("uuid");
const moment = require("moment");
const { pool: dataBase } = require("../../models/db");

const {
  createReflectionQuery,
  getAllReflectionQuery,
  getOneReflectionQuery,
  updateReflectionQuery,
  deleteReflectionQuery,
} = require("./reflectionQuery");

const createReflection = async (data) => {
  const values = [
    uuIdv4(),
    data.success,
    data.low_point,
    data.take_away,
    data.owner_id,
    moment(new Date()),
    moment(new Date()),
  ];
  const { rows } = await dataBase.query(createReflectionQuery, values);
  return rows[0];
};

const getAllReflection = async (userId) => {
  const { rows } = await dataBase.query(getAllReflectionQuery, [userId]);
  return rows;
};
const getOneReflection = async (userId, reflectionId) => {
  const { rows } = await dataBase.query(getOneReflectionQuery, [
    userId,
    reflectionId,
  ]);
  return rows[0];
};


const updateReflection = async (userId, reflectionId, data) => {
  const oldData = await getOneReflection(userId, reflectionId);
  const values = [
    data.success || oldData.success,
    data.low_point || oldData.low_point,
    data.take_away || oldData.take_away,
    moment(new Date()),
    userId,
    reflectionId,
  ];
  const { rows } = await dataBase.query(updateReflectionQuery, values);
  return rows[0];
};

const deleteReflection = async (userId, reflectionId) => {
  console.log(userId, reflectionId);
  const res = await dataBase.query(deleteReflectionQuery, [
    userId,
    reflectionId,
  ]);
  if (res.rowCount==0) {
    throw new Error("Reflection not found");
  }
};
module.exports = {
  createReflection,
  getAllReflection,
  getOneReflection,
  updateReflection,
  deleteReflection
};
