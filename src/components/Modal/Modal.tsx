/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { ReactComponent as Success } from "../../assets/success.svg";
import { fetchElements } from "../../store/elementReducer";
import { useAppDispatch } from "../../store/hooks";
import { fetchLookUps } from "../../store/lookupReducer";
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
  data,
}: {
  show: boolean;
  handleClose: () => void;
  data?: any;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const [stage, setStage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    dispatch<any>(fetchLookUps());
  }, [dispatch]);

  console.log(data, "data");

  useEffect(() => {
    if (data) {
      setValue("name", data?.name);
      setValue("classificationValueId", data?.classificationValueId);
      setValue("categoryValueId", data?.categoryValueId);
      setValue("payRunValueId", data?.payRunValueId);
      setValue("description", data?.description);
      setValue("reportingName", data?.reportingName);
    }
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    register,
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data: any) => {
    setIsSubmitted(true);
    const selectedMonths = data?.selectedMonths?.map((i: any) => i.label);
    const payload = {
      name: data?.name,
      description: data?.description,
      payRunId: 5,
      payRunValueId: data?.payRunValueId,
      classificationId: 2,
      classificationValueId: data?.classificationValueId,
      categoryId: 1,
      categoryValueId: data?.categoryValueId,
      reportingName: data.reportingName,
      processingType: data?.processingType,
      status: data?.status,
      prorate: data?.prorate,
      effectiveStartDate: data?.effectiveStartDate,
      effectiveEndDate: data?.effectiveEndDate,
      selectedMonths: selectedMonths,
      payFrequency: data?.payFrequency,
      modifiedBy: "Bankole Idris Adegboyega",
    };

    try {
      const response = await axios.post(
        `https://650af6bedfd73d1fab094cf7.mockapi.io/elements`,
        payload
      );
      console.log(response.data);
      if (response.status === 201) {
        dispatch<any>(fetchElements());
        handleClose();
      }
    } catch (error) {
      setIsSubmitted(false);
      return error;
    }
    setIsSubmitted(false);
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
          <Modal.Title>
            {Object.keys(data)?.length > 0 ? "Edit Element" : "Create Element"}
          </Modal.Title>
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
                        name="classificationValueId"
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
                        aria-label="Effective Start Date"
                        className="form-control form-input"
                        id="effectiveStartDate"
                        {...register("effectiveStartDate", {
                          required: "Please enter a start date",
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
                        aria-label="Effective Start Date"
                        className="form-control form-input"
                        id="effectiveEndDate"
                        {...register("effectiveEndDate", {
                          required: "Please enter a start date",
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
                      <Controller
                        name="processingType"
                        control={control}
                        rules={{ required: "Please select a processing type" }}
                        render={({ field }) => (
                          <div
                            key="inline-radio"
                            className="mb-3 radio-input form-control"
                          >
                            <Form.Check
                              inline
                              label="Open"
                              type="radio"
                              id="open"
                              {...field}
                              value="open"
                            />
                            <Form.Check
                              inline
                              label="Closed"
                              type="radio"
                              id="closed"
                              {...field}
                              value="closed"
                            />
                          </div>
                        )}
                      />
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
                      <Controller
                        name="payFrequency"
                        control={control}
                        rules={{ required: "Please select a pay frequency" }}
                        render={({ field }) => (
                          <div
                            key="inline-radio"
                            className="mb-3 radio-input form-control"
                          >
                            <Form.Check
                              inline
                              label="Monthly"
                              type="radio"
                              id="monthly"
                              {...field}
                              value="monthly"
                            />
                            <Form.Check
                              inline
                              label="Selected Months"
                              type="radio"
                              id="selectedMonths"
                              {...field}
                              value="selectedMonths"
                            />
                          </div>
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
                        Selected Pay Months
                      </Form.Label>
                      <Controller
                        name="selectedMonths"
                        control={control}
                        render={({ field }) => (
                          <Select
                            isMulti
                            // options={monthsArray.map((month) => ({
                            //   value: month.abbreviation,
                            //   label: month.name,
                            // }))}
                            {...field}
                            isDisabled={
                              watch()?.payFrequency === "monthly" ? true : false
                            }
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
                      <Controller
                        name="processingType"
                        control={control}
                        rules={{ required: "Please select a processing type" }}
                        render={({ field }) => (
                          <div
                            key="inline-radio"
                            className="mb-3 radio-input form-control"
                          >
                            <Form.Check
                              inline
                              label="Yes"
                              type="radio"
                              id="yes"
                              {...field}
                              value="yes"
                            />
                            <Form.Check
                              inline
                              label="No"
                              type="radio"
                              id="no"
                              {...field}
                              value="no"
                            />
                          </div>
                        )}
                      />
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
                      <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                          <div
                            key="inline-radio"
                            className="mb-3 radio-input form-control"
                          >
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              label="Active"
                              {...field}
                              value={field.value ? "active" : "inactive"}
                            />
                          </div>
                        )}
                      />
                      {/* <div
                        key={`inline-radio`}
                        className="mb-3 radio-input form-control"
                      >
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Active"
                        />
                      </div> */}
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
                    onClick={() => {
                      handleClose();
                      reset();
                    }}
                  >
                    Cancel
                  </button>
                </Col>
                <Col>
                  <button
                    type="button"
                    className="w-100 form-button next"
                    // disabled={!isValid}
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
                    {isSubmitted ? "Creating" : "Create New Element"}
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
