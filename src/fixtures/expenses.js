import moment from "moment";

export default [{
  id:"1",
  description:"Gum",
  note:"",
  amount: 195,
  createdAt:moment(0).subtract(5,'days').valueOf()
},{
  id:"2",
  description:"Rent",
  note:"",
  amount: 4695,
  createdAt:moment(0).add(4,'days').valueOf()

},{
  id:"3",
  description:"Test ",
  note:"",
  amount: 4595,
  createdAt:moment(0).subtract(4,'days').valueOf()

}

];
