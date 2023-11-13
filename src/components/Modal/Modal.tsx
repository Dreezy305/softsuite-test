import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import * as yup from "yup";
import { ReactComponent as Success } from "../../assets/success.svg";
import { monthsArray } from "../../utils/months";
import "./modal.scss";

function CreateElementModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}): JSX.Element {
  const [stage, setStage] = useState(2);

  const options = monthsArray.map((month) => ({
    value: month.abbreviation,
    label: month.name,
  }));

  //   const schema = {
  //     name: String,
  //     description: String,
  //     payRunId: Number,
  //     payRunValueId: Number,
  //     classificationId: Number,
  //     classificationValueId: Number,
  //     categoryId: Number,
  //     categoryValueId: Number,
  //     reportingName: String,
  //     processingType: String,
  //     status: String,
  //     prorate: String,
  //     effectiveStartDate: String,
  //     effectiveEndDate: String,
  //     selectedMonths: [String],
  //     payFrequency: String,
  //   };

  const SchemaValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    payRunId: yup.number().required("PayRunId is required"),
    payRunValueId: yup.number().required("PayRunValueId is required"),
    classificationId: yup.number().required("ClassificationId is required"),
    classificationValueId: yup
      .number()
      .required("ClassificationValueId is required"),
    categoryId: yup.number().required("CategoryId is required"),
    categoryValueId: yup.number().required("CategoryValueId is required"),
    reportingName: yup.string().required("Reporting Name is required"),
    // processingType: yup.string().required("Processing Type is required"),
    // status: yup.string().required("Status is required"),
    // prorate: yup.string().required("Prorate is required"),
    // effectiveStartDate: yup
    //   .string()
    //   .required("Effective Start Date is required"),
    // effectiveEndDate: yup.string().required("Effective End Date is required"),
    // selectedMonths: yup
    //   .array()
    //   .of(yup.string())
    //   .required("Selected Months is required"),
    // payFrequency: yup.string().required("Pay Frequency is required"),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isValid, isSubmitted },
    control,
    register,
  } = useForm({
    // resolver: yupResolver(SchemaValidation),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("Step 2 data:", data);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" className="px-3">
      <Modal.Header closeButton={false}>
        <Modal.Title>Create Element</Modal.Title>
      </Modal.Header>
      {isSubmitted ? (
        <Modal.Body>
          <Row>
            <Col>
              <Success className="mx-auto text-center" />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="w-50 text-center mx-auto">
                Element has been created successfully
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-2">
            <Col>
              <button
                type="button"
                className="w-100 form-button next"
                onClick={handleClose}
              >
                Close to continue
              </button>
            </Col>
          </Row>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {stage === 1 && (
              <>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="form-input-label">Name</Form.Label>
                      <Controller
                        name="name"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: "pls enter yout name",
                          },
                        }}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder="Input Name"
                            className="form-input"
                          />
                        )}
                      />
                      {errors.name && (
                        <Form.Control.Feedback type="invalid">
                          {errors.root?.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="form-input-label">
                        Elements Classification
                      </Form.Label>
                      <Controller
                        name="classificationId"
                        control={control}
                        rules={{ required: "Please choose an option" }}
                        render={({ field }) => (
                          <Form.Select {...field} className="form-input">
                            <option value="">Selection Classification</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Form.Select>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="form-input-label">
                        Elements Category
                      </Form.Label>
                      <Controller
                        name="categoryValueId"
                        control={control}
                        rules={{ required: "Please choose an option" }}
                        render={({ field }) => (
                          <Form.Select {...field} className="form-input">
                            <option value="">Choose...</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Form.Select>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="form-input-label">
                        Payrun
                      </Form.Label>
                      <Controller
                        name="payRunValueId"
                        control={control}
                        rules={{ required: "Please choose an option" }}
                        render={({ field }) => (
                          <Form.Select {...field} className="form-input">
                            <option value="">Choose...</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Form.Select>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Description
                      </Form.Label>
                      <Controller
                        name="description"
                        control={control}
                        rules={{ required: "First Name is required" }}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder="Input Description"
                            as="textarea"
                            className="form-input form-input-textarea"
                          />
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Reporting Name
                      </Form.Label>
                      <Controller
                        name="reportingName"
                        control={control}
                        rules={{ required: "First Name is required" }}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder="Input Reporting Name"
                            as="textarea"
                            className="form-input form-input-textarea"
                          />
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </>
            )}
            {stage === 2 && (
              <>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Effective Start Date
                      </Form.Label>
                      <input
                        type="date"
                        aria-label="First name"
                        className="form-control form-input"
                        id="effectiveStartDate"
                        {...register("effectiveStartDate", {
                          required: {
                            value: true,
                            message: "pls enter start date",
                          },
                        })}
                      />
                      {errors.effectiveStartDate && (
                        <Form.Control.Feedback type="invalid">
                          {errors.root?.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Effective End Date
                      </Form.Label>
                      <input
                        type="date"
                        aria-label="First name"
                        className="form-control form-input"
                        id="effectiveStartDate"
                        {...register("effectiveStartDate", {
                          required: {
                            value: true,
                            message: "pls enter start date",
                          },
                        })}
                      />
                      {errors.effectiveStartDate && (
                        <Form.Control.Feedback type="invalid">
                          {errors.root?.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Processing Type
                      </Form.Label>
                      <div key={`inline-radio`} className="mb-3 radio-input">
                        <Form.Check
                          inline
                          label="Open"
                          name="processingType"
                          type={"radio"}
                          id={``}
                        />
                        <Form.Check
                          inline
                          label="Closed"
                          name="processingType"
                          type={"radio"}
                          id={``}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Pay Frequency
                      </Form.Label>
                      <div key={`inline-radio`} className="mb-3 radio-input">
                        <Form.Check
                          inline
                          label="Monthly"
                          name="payFrequency"
                          type={"radio"}
                          id={``}
                        />
                        <Form.Check
                          inline
                          label="Selected Months"
                          name="payFrequency"
                          type={"radio"}
                          id={``}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Selected Pay Months
                      </Form.Label>
                      <Controller
                        name="selectedMonths"
                        control={control}
                        render={({ field }) => (
                          <Select
                            isMulti
                            options={monthsArray.map((month) => ({
                              value: month.abbreviation,
                              label: month.name,
                            }))}
                            {...field}
                          />
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Prorate
                      </Form.Label>
                      <div key={`inline-radio`} className="mb-3 radio-input">
                        <Form.Check
                          inline
                          label="Yes"
                          name="processingType"
                          type={"radio"}
                          id={``}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="processingType"
                          type={"radio"}
                          id={``}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="form-input-label">
                        Status
                      </Form.Label>
                      <div key={`inline-radio`} className="mb-3 radio-input">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Active"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </>
            )}

            {/* STAGE 1 BUTTONS */}
            {stage === 1 && (
              <Row className="mt-3 mb-2">
                <Col>
                  <button
                    type="button"
                    className="w-100 form-button cancel"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </Col>
                <Col>
                  <button
                    type="button"
                    className="w-100 form-button next"
                    disabled={!isValid}
                    onClick={() => setStage(2)}
                  >
                    Next
                  </button>
                </Col>
              </Row>
            )}
            {/* STAGE 2 BUTONS */}
            {stage === 2 && (
              <Row className="mt-3 mb-2">
                <Col>
                  <button
                    type="button"
                    className="w-100 form-button cancel"
                    onClick={() => setStage(1)}
                  >
                    Back
                  </button>
                </Col>
                <Col>
                  <button
                    type="button"
                    className="w-100 form-button next"
                    disabled={!isValid}
                    onClick={() => setStage(2)}
                  >
                    Create New Element
                  </button>
                </Col>
              </Row>
            )}
          </Form>
        </Modal.Body>
      )}
    </Modal>
  );
}

export default CreateElementModal;
