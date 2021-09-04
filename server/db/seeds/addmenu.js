
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {id: 1, name: '餐饮外卖'},
        {id: 2, name: '电脑数码'},
        {id: 3, name: '服饰鞋包'},
        {id: 4, name: '个护化妆'},
        {id: 5, name: '家居园艺'},
        {id: 6, name: '家用电器'},
        {id: 7, name: '金融服务'},
        {id: 8, name: '旅游出行'},
        {id: 9, name: '母婴宠物'},
        {id: 10, name: '配饰腕表'},
        {id: 11, name: '汽车&配件'},
        {id: 12, name: '日用百货'},
        {id: 13, name: '食品生鲜'},
        {id: 14, name: '图书音像'},
        {id: 15, name: '玩模乐器'},
        {id: 16, name: '文化娱乐'},
        {id: 17, name: '游戏'},
        {id: 18, name: '运动户外'},
        {id: 19, name: '其他'},
      ]);
    });
};
