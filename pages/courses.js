import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Button from "@material-tailwind/react/Button";
import Card from "./components/Home/Card";
import { db } from "../firebase";
import { Component } from "react";


class Courses extends Component {
  
  state={
    data:[]
  }

  result = []

  componentDidMount(){
      var ref = db.ref('courses/');
      ref.on('value', (snapshot) => {
        this.result = Object.keys(snapshot.val());
        // console.log(data);
        let courses = []
        for(let i = 0; i < 3 && i < this.result.length; i++){
          courses.push(this.result[i])
        }
        this.setState({data: courses})
      });
  }

   changeList(){
    let len = this.state.data.length;
    let courses = [...this.state.data]
    for(let i = len; i < len+3 && courses.length < this.result.length; i++){
      courses.push(this.result[i])
    }
    console.log(this.state);
    this.setState({data: courses});
  }

  render () {

    return (
      <div>
      <Header />

      <div className="px-48 mt-16">
        {/* course */}
        <div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-400">Courses</h1>
          </div>
          <div className="grid grid-cols-3">
            {this.state.data && this.state.data.map(s => <Card key={s} curr={s}/>)}
            {console.log(this.state)}
          </div>
          <Button
          buttonType="contained"
          color=""
          iconOnly={true}
          ripple="dark"
          className="md:inline-flex h-15 w-24 bg-regal-blue border-0 mt-2"
          onClick={() => this.changeList()}
          >
          <h1 className="text-white justify-center">Show more</h1>
        </Button>
        </div>

        {/* recently viewed */}
        <div className="flex flex-col mt-10">
          <h1 className="text-4xl font-normal text-gray-400 pb-11">
            Recently Viewed Decks
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
}

export default Courses;
