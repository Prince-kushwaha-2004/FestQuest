import { Button, ConfigProvider, Input, Steps } from 'antd';

import React, { useEffect, useState } from "react";
import logo from "../assets/festLogo.png";
import Axios from '../axios/Axios';
import HandleChange from '../utils/Function';



const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });



  const getOTP = () => {
    const request = {
      method: "POST",
      dataObject: registerForm

    }
    Axios(request).then((res) => {
      console.log(res)
    })
  }

  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };


  useEffect(() => {



  }, [])
  const description = 'This is a description.';




  return <>
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: '#1677ff',
            inputFontSizeLG: 24,
            size: 'middle',
            paddingBlock: 7,
            inputFontSize: 18,
            activeBorderColor: '#1677ff',
            paddingInline: 16
          },
          Button: {
            paddingInline: 29,
            paddingBlock: 36,
            primaryColor: '#fff'
          }
        },
      }}
    >
      <div className="w-full justify-center h-screen flex items-center  bg-background p-18 ">

        <div className="drop-shadow-md static z-0 rounded-2xl self-center bg-white h-[90%] w-[93%] flex justify-end  ">

          <div className=" w-2/3">
            <div className='flex justify-end items-center px-5 font-semibold mt-[.5rem]  py-3 w-full'>
              <div className='px-4 '>Already have an account? </div>
              <Button color="primary" variant="filled">Sign in</Button>
            </div>

            <div className='flex justify-center text-4xl font-bold mt-11'>
              Create your free account
            </div>

            <div className='flex gap-4 mt-25 flex-col items-center  justify-center'>
              <Input name='name' value={registerForm.name} onChange={e => HandleChange(e, setRegisterForm)} style={{ width: '50%' }} placeholder="Name" />
              <Input name='email' value={registerForm.email} onChange={e => HandleChange(e, setRegisterForm)} style={{ width: '50%' }} placeholder="Email" />
              {/* <Input name='bio' value={registerForm.bio} onChange={e => HandleChange(e, setRegisterForm)} style={{ width: '50%' }} placeholder="Bio" /> */}
              {/* <Input name='password' value={registerForm.password} onChange={e => HandleChange(e, setRegisterForm)} style={{ width: '50%' }} placeholder="Password" />
                            <Input name='confirmPassword' value={registerForm.confirmPassword} onChange={e => HandleChange(e, setRegisterForm)} style={{ width: '50%' }} placeholder="Confirm password" /> */}
              <Button color="primary" variant="solid" style={{}} onClick={(e) => console.log(registerForm)} >next</Button>


            </div>

          </div>


        </div>
        <div className="absolute flex flex-col inset-y-0 left-0 opacity-70 justify-center items-end z-10 bg-themeColor h-full w-1/3  ">

          <div className='w-1/3'></div>

          <div className=' w-2/3 pr-14 '>


            <div className='  '> <img src={logo} alt="" /> </div>

            <div className=''>
              <Steps
                current={current}
                onChange={onChange}

                direction="vertical"
                items={[
                  {
                    title: 'Step 1',
                    description,
                  },
                  {
                    title: 'Step 2',
                    description,
                  },
                  {
                    title: 'Step 3',
                    description,
                  },
                ]}
              />

            </div>


          </div>




        </div>

      </div>
    </ConfigProvider>
  </>

};

export default Register;
