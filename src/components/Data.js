import React from 'react';

const Data = (props) => {
    const foodlist = ['acorn squash','fresh',
    'alfalfa sprouts','almond','anchovy','anise','appetite','appetizer','apple','apricot','artichoke','asparagus',
    'aspic','avocado','bacon','bagel','bake','baked Alaska','bamboo shoots','banana','barbecue','barley',
    'basil','batter','beancurd','beans','beef','beet','bell pepper','berry','biscuit','bitter','black beans',
    'black tea','black-eyed peas','blackberry','bland','salad','steak','yoghurt','soya', 'pasta','fusilli'];
      const textArr = props.arr;
      let retArr = [];

      retArr = foodlist.filter(b=> textArr.some(a=> new RegExp(b,'i').test(a)));
      
     
    return (
        <div>

          <h1> {retArr[0]}</h1>
          <h1> {retArr[1]}</h1>
        </div> 
        
    );
}
export default Data;
