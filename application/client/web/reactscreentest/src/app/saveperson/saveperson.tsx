import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./saveperson.scss";
import  {service}   from './saveperson.service';

class Saveperson extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    person : {
    name: '',
    age: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ person: { ...this.state.person, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.person.created_by = sessionStorage.getItem('email')||'{}';
    }
    Create  () {
    this.test.Create(this.state.person).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">saveperson</h2>
        <div>
    <div id="template-isfg" className="gjs-row">
        <div id="template-i41p" className="gjs-cell">
            <input type="text" id="template-irmi" placeholder="Enter the name" required={true}onChange={this.handlechange}
            name="name" value={this.state.person.name}className="form-control " />
        </div>
        <div id="template-iadl" className="gjs-cell">
            <input type="text" id="template-ikb5" placeholder="Enter the age" required={true}onChange={this.handlechange}
            name="age" value={this.state.person.age}className="form-control " />
        </div>
    </div>
    <button type="button" id="template-i53y" onClick={()=>this.Create()} className="btn btn-primary "> Save</button>
</div>
    </>
    );
    };
    };

    export default Saveperson;