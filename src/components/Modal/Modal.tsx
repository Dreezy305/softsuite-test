/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Controller, useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import Select from "react-select";
import { ReactComponent as Success } from "../../assets/success.svg";
import { useAppDispatch } from "../../store/hooks";
import { fetchLookUps } from "../../store/lookupReducer";
// import { fetchLookUpsValues } from "../../store/lookupValueReducer";
import {
  ELEMENT_CAT,
  ELEMENT_CLASS,
  PAY_RUN,
  monthsArray,
} from "../../utils/months";
import "./modal.scss";

function CreateElementModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const [stage, setStage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    dispatch<any>(fetchLookUps());
  }, [dispatch]);

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    register,
    reset,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("Step 2 data:", { ...data, modifiedBy: "" });
    const selectedMonths = data?.selectedMonths?.map((i: any) => i);
    const payload = {
      name: data?.name,
      description: data?.description,
      payRunId: 5,
      payRunValueId: Number,
      classificationId: 2,
      classificationValueId: Number,
      categoryId: 1,
      categoryValueId: Number,
      reportingName: data.reportingName,
      processingType: data?.processingType,
      status: data?.status,
      prorate: data?.prorate,
      effectiveStartDate: data?.effectiveStartDate,
      effectiveEndDate: data?.effectiveEndDate,
      selectedMonths: [String],
      payFrequency: data?.payFrequency,
      modifiedBy: "Bankole Idris Adegboyega",
    };
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        setIsSubmitted(false);
        reset();
      }}
      size="lg"
      className="px-3"
      centered
    >
      {!isSubmitted && (
        <Modal.Header closeButton={false}>
          <Modal.Title>Create Element</Modal.Title>
        </Modal.Header>
      )}
      {isSubmitted ? (
        <Modal.Body>
          <Row>
            <Col className="mx-auto text-center d-flex">
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
                            {ELEMENT_CLASS?.map((i: any) => (
                              <option value={i?.id}>{i?.name}</option>
                            ))}
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
                            <option value="">Select category</option>
                            {ELEMENT_CAT?.map((i: any) => (
                              <option value={i?.id}>{i?.name}</option>
                            ))}
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
                            <option value="">Select</option>
                            {PAY_RUN?.map((i: any) => (
                              <option value={i?.id}>{i?.name}</option>
                            ))}
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
                      <div
                        key={`inline-radio`}
                        className="mb-3 radio-input form-control"
                      >
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
                      <div
                        key={`inline-radio`}
                        className="mb-3 radio-input form-control"
                      >
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
                      <div
                        key={`inline-radio`}
                        className="mb-3 radio-input form-control"
                      >
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
                      <div
                        key={`inline-radio`}
                        className="mb-3 radio-input form-control"
                      >
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
                    type="submit"
                    className="w-100 form-button next"
                    disabled={!isValid}
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
