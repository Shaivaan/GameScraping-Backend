const error_msg = { error: "Something Went Wrong" };
const get_all_api = "https://www.systemrequirementslab.com/cyri";
const individual_game_api = (name, code) => {
  return `https://www.systemrequirementslab.com/cyri/requirements/${name}/${code}`;
};

module.exports = { error_msg, get_all_api, individual_game_api };
