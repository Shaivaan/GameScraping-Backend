const axios = require("axios");
const cheerio = require("cheerio");
const { error_msg, get_all_api, individual_game_api } = require("./assets");

const get_all = () => {
  return axios
    .get(get_all_api)
    .then((res) => {
      const $ = cheerio.load(res.data);
      const data = [];
      $(".col-6")
        .find("span > a")
        .each((index, el) => {
          const $row = $(el);
          const game_name = $row.text();
          const game_link = $row.attr("href");
          data.push({ game_link, game_name });
        });
      return data;
    })
    .catch((err) => {
      return error_msg;
    });
};

const get_individual = (name, code) => {
  return axios.get(individual_game_api(name, code)).then((res) => {
    const data = {
      minimum: [],
      recommended: [],
      pictorial_specs_link: null,
      breif: null,
      image_link: null,
    };
    const $ = cheerio.load(res.data);
    $(".col-8 > ul").each((index, el) => {
      const $row = $(el);
      $row.find("li").each((i, el) => {
        const $row = $(el);
        index == 0 && data.minimum.push($row.text());
        index == 1 && data.recommended.push($row.text());
      });
    });
    const specs_image_link = $("#system-info:last").find("img").attr("src");
    data.pictorial_specs_link = specs_image_link;
    const image_link = $("#box-shots > img").attr("src");
    data.image_link = image_link;
    const breif = $(".row > .col").children("p").text();
    data.breif = breif;
    return data;
  })
  .catch((err)=>{
    return error_msg;
  });
};

module.exports = { get_all, get_individual };