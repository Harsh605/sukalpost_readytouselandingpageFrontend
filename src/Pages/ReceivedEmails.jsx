import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQueries } from "../slices/userSlice";
import "../emails.css"
const ReceivedEmails = () => {
  const dispatch = useDispatch();
  const { isLoading, emailData } = useSelector((state) => state.custom2);

  useEffect(() => {
    dispatch(getAllQueries());
  }, [dispatch]);
  console.log(emailData);



  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return (
    <section className="intro">
      <div
        className="bg-image h-100"
        style={{backgroundImage:"url(https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img7.jpg)"}}
      >
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card mask-custom">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table style={{width:"100%",maxWidth:"100%"}} className="table table-borderless text-white mb-0">
                        <thead>
                          <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Intersted Software</th>
                            <th scope="col">Message</th>
                            <th scope="col">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {emailData &&
                            emailData.length > 0 &&
                            emailData.map((email, index) => (
                              <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{email?.name}</td>
                                <td>{email?.contactNo}</td>
                                <td>{email?.softwareName}</td>
                                <td>{email?.description}</td>
                                <td>{email.createdAt && formatDate(email.createdAt)}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceivedEmails;
