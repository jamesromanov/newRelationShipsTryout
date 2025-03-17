let response = (res, data, sts = 200) => {
  if (sts > 205 || sts < 200) res.status(sts).json({ status: "Failed!", data });
  else res.status(sts).json({ status: "Succes!", data });
};

module.exports = { response };
