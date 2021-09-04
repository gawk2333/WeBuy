
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {id: 1, topic: '餐饮外卖'},
        {id: 2, topic: '电脑数码'},
        {id: 3, topic: '服饰鞋包'},
        {id: 4, topic: '个护化妆'},
        {id: 5, topic: '家居园艺'},
        {id: 6, topic: '家用电器'},
        {id: 7, topic: '金融服务'},
        {id: 8, topic: '旅游出行'},
        {id: 9, topic: '母婴宠物'},
        {id: 10, topic: '配饰腕表'},
        {id: 11, topic: '汽车&配件'},
        {id: 12, topic: '日用百货'},
        {id: 13, topic: '食品生鲜'},
        {id: 14, topic: '图书音像'},
        {id: 15, topic: '玩模乐器'},
        {id: 16, topic: '文化娱乐'},
        {id: 17, topic: '游戏'},
        {id: 18, topic: '运动户外'},
        {id: 19, topic: '其他'},
      ]);
    });
};
