import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState, useContext } from "react"
// import AuthContext from "@/context/AuthProvider"
import { Snackbar } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { X } from "lucide-react"
import AuthContext from "../../context/AuthContext"
// import axios from "../../api/axios"
// const LOGIN_URL = "/auth";

export const SignIn = () => {
  const {loginUser} = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const form = useForm({
    // defaultValues: {
    //   username: "Jane Doe",
    //   password: "password",
    // },
    mode: "onTouched",
  })
  const { register, formState, control, handleSubmit, reset } = form
  const { errors, isDirty, isSubmitting, isSubmitSuccessful } = formState

  const onSubmit = async (data) => {
    loginUser
  }

  useEffect(() => {
    if (isSubmitting) {
      ;<h1>Submitting...</h1>
    }
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      setOpen(true)
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <div className="rounded-full text-white px-1 py-1">
        <X />
      </div>
    </IconButton>
  )

  return (
    <>
      <div className=" w-full min-h-screen overflow-y-scroll signup-background">
        {/* <div className="s "></div> */}
        <div className="flex-flow-col p-10 w-[400px] md:w-[500px] mx-auto">
          <div className="">
            {/* <h1 className="leading-snug text-3xl shadow-sm text-white enriqueta-bold">Sign Up</h1> */}
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl shadow-sm enriqueta-bold">
              Sign In
            </h2>
            <p className="mt-2 text-lg text-black-600">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="font-bold text-white transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
          </div>
          <div className="min-w-xs">
            <form
              action=""
              onSubmit={handleSubmit(loginUser)}
              noValidate
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {/* email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  UserName
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="janedoe"
                  {...register("username", {
                    required: "Username is required.",
                  })}
                />
                <p className="text-sm italic text-red-500">
                  {errors.email?.message}
                </p>
              </div>

              {/* password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                <p className="text-sm italic text-red-500">
                  {errors.password?.message}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-[#2C2E44] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={!isDirty || isSubmitting}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {open && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          message="Sign Up Sucessful."
          onClose={handleClose}
          action={action}
        />
      )}

      <DevTool control={control} />
    </>
  )
}
