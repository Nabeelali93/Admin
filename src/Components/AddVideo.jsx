import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, Form } from "formik";
import Button from "react-bootstrap/Button";
import { db } from "../Config/firebase";
import { ref } from "firebase/database";
import { push, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";

function Videos() {




  return (
    <>
      <Sidebar />

      <div style={{ marginLeft: "27%" }}>
        <h1 className="text-gray-500 p-10">Add Video</h1>

        <fieldset className="border-solid border-2 w-70 p-5 mx-10">
          <Formik
            initialValues={{
              title: "",
              Description: "",
              id: "",
            }}
            onSubmit={async (v) => {
              let obj;

              try {
                let dbref = ref(db, "addVideos");
                let newPostRef = push(dbref);

                obj = {
                  title: v.title,
                  Description: v.Description,
                  id: v.id,
                };

                set(newPostRef, obj);

                if (obj !== null) {
                  toast.success("Your Item has been upload", {
                    autoClose: 2000,
                  });
                }
              } catch (e) {
                console.log(e);
                if (obj === null) {
                  toast.error("Please Enter Data", {
                    autoClose: 2000,
                  });
                }
              }
            }}
          >
            <Form className="m-5">
              <Field
                type="text"
                placeholder="Title"
                name="title"
                className="form-control"
              />
              <br /> <br />
              <Field
                type="text"
                placeholder="Description"
                name="Description"
                className="form-control"
              />
              <br /> <br />
              <Field
                type="text"
                name="id"
                placeholder="Please Enter Youtube's Video ID"
                className="form-control"
              />
              <br /> <br />
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Formik>
        </fieldset>

        <ToastContainer />
      </div>
    </>
  );
}

export default Videos;
