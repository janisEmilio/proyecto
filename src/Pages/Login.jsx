import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie/es6';



const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();


    const responseGoogle=(respuesta1)=>{
        console.log(respuesta1);
        console.log(respuesta1.profileObj); }
        
    class Login extends Component{
        state={
            form:{
                username:'',
                password:''
            }
        }


        handleChange=async e=>{
            await this.setState({

                form:{
                    ...this.state.form,
                    [e.target.name]: e.target.value
                }
            });
        }

        iniciarSesion=async()=>{
            await axios.get(baseUrl, {params:{username: this.state.form.username, password: md5(this.state.form.password)}})
            .then(response=>{
            return response.data;
            })
            .then(response=>{
                if(response.length> 0 ){
                    var respuesta=response[0];
                    cookies.set('id', respuesta.id, {path:"/"});
                    cookies.set('pnombre', respuesta.pnombre, {path:"/"});
                    cookies.set('snombre', respuesta.snombre, {path:"/"});
                    cookies.set('papellido', respuesta.papellido, {path:"/"});
                    cookies.set('sapellido', respuesta.sapellido, {path:"/"});
                    cookies.set('username', respuesta.username, {path:"/"});
                    alert('Bienvenido a nuestra plataforma' );
                    window.location.href="./ventas";
                }else{
                    alert('El usuario o contraseña no son correctos')
                }
            })

            .catch(error=>{
                console.log(error);
            })
        }

        render(){
            return(
                <div className="containerPrincipal">
                    <div className="containerSecundario">
                        <div className="form-group">
                            <label>Usuario: </label>
                            <br />
                            <input type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}/>
                            
                            <br />
                            <label>Contraseña : </label>
                            <br />
                            <input type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}/>
                            <br />
                            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                            <br />
                            <br />
                            <GoogleLogin
                            clientId="950598602886-q3c9atp54ostillibblvfsdil3hjao4f.apps.googleusercontent.com"
                            buttonText="Iniciar con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                         
                                />
                                


                        </div>
                    </div>
                </div>
            );
        }







    }
    

    
    


export default Login
