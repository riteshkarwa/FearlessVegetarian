import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { supabase } from "./supabase";

class ScratchPad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            enteredUsername: "",
            text: "",
            scratchPadId: null,
            usernameSubmitted: false,
            saved: false,
            loading: false,
            saving: false,
            error: "",
            message: ""
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            enteredUsername: event.target.value,
            error: "",
            message: ""
        });
    };

    loadScratchPad = async () => {
        const username = this.state.enteredUsername
            .trim()
            .toLowerCase();

        if (!username) {
            this.setState({
                error: "Please enter a username."
            });

            return;
        }

        this.setState({
            loading: true,
            error: "",
            message: "",
            saved: false
        });

        try {
            const {
                data,
                error
            } = await supabase
                .from("scratch_pad")
                .select("id, username, content")
                .eq("username", username)
                .maybeSingle();

            if (error) {
                console.error(
                    "Error loading scratch pad:",
                    error
                );

                this.setState({
                    loading: false,
                    error: error.message
                });

                return;
            }

            /*
             * Username already exists.
             * Load that user's Scratch Pad.
             */
            if (data) {
                this.setState({
                    username: data.username,
                    text: data.content || "",
                    scratchPadId: data.id,
                    usernameSubmitted: true,
                    loading: false,
                    message: `Welcome back, ${data.username}!`
                });

                return;
            }

            /*
             * Username does not exist.
             * Create a new Scratch Pad.
             */
            const {
                data: newData,
                error: insertError
            } = await supabase
                .from("scratch_pad")
                .insert({
                    username: username,
                    content: ""
                })
                .select("id, username, content")
                .single();

            console.log("INSERT DATA:", newData);
            console.log("INSERT ERROR:", insertError);

            if (insertError) {
                this.setState({
                    loading: false,
                    error: insertError.message
                });

                return;
            }

            this.setState({
                username: newData.username,
                text: newData.content || "",
                scratchPadId: newData.id,
                usernameSubmitted: true,
                loading: false,
                message: `New Scratch Pad created for ${newData.username}!`
            });
        } catch (error) {
            console.error(
                "Unexpected error:",
                error
            );

            this.setState({
                loading: false,
                error: "Something went wrong. Please try again."
            });
        }
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
            saved: false,
            error: "",
            message: ""
        });
    };

    saveText = async () => {
        const {
            text,
            scratchPadId
        } = this.state;

        if (!scratchPadId) {
            this.setState({
                error: "Scratch Pad not found."
            });

            return;
        }

        this.setState({
            saving: true,
            saved: false,
            error: "",
            message: ""
        });

        try {
            const {
                error
            } = await supabase
                .from("scratch_pad")
                .update({
                    content: text,
                    updated_at: new Date().toISOString()
                })
                .eq("id", scratchPadId);

            if (error) {
                console.error(
                    "Error saving Scratch Pad:",
                    error
                );

                this.setState({
                    saving: false,
                    error: error.message
                });

                return;
            }

            this.setState({
                saving: false,
                saved: true,
                message: "Saved successfully."
            });
        } catch (error) {
            console.error(
                "Unexpected error:",
                error
            );

            this.setState({
                saving: false,
                error: "Unable to save your Scratch Pad."
            });
        }
    };

    clearText = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to clear this Scratch Pad?"
        );

        if (!confirmed) {
            return;
        }

        const {
            scratchPadId
        } = this.state;

        if (!scratchPadId) {
            return;
        }

        this.setState({
            saving: true,
            saved: false,
            error: "",
            message: ""
        });

        try {
            const {
                error
            } = await supabase
                .from("scratch_pad")
                .update({
                    content: "",
                    updated_at: new Date().toISOString()
                })
                .eq("id", scratchPadId);

            if (error) {
                console.error(
                    "Error clearing Scratch Pad:",
                    error
                );

                this.setState({
                    saving: false,
                    error: error.message
                });

                return;
            }

            this.setState({
                text: "",
                saving: false,
                saved: true,
                message: "Scratch Pad cleared."
            });
        } catch (error) {
            console.error(
                "Unexpected error:",
                error
            );

            this.setState({
                saving: false,
                error: "Unable to clear the Scratch Pad."
            });
        }
    };

    changeUser = () => {
        this.setState({
            username: "",
            enteredUsername: "",
            text: "",
            scratchPadId: null,
            usernameSubmitted: false,
            saved: false,
            loading: false,
            saving: false,
            error: "",
            message: ""
        });
    };

    render() {
        const {
            username,
            enteredUsername,
            text,
            usernameSubmitted,
            saved,
            loading,
            saving,
            error,
            message
        } = this.state;

        return (
            <div className="scratch-pad-page">

                <h1>Scratch Pad</h1>

                <p className="scratch-pad-description">
                    Use this Scratch Pad to write and save your own notes, recipe ideas,
                    ingredients, grocery lists, cooking notes, reminders, and other useful
                    information. Enter your username to access your Scratch Pad, save your
                    notes, update them whenever you like, or clear them when you no longer
                    need them.
                </p>

                {!usernameSubmitted ? (
                    <div className="scratch-pad-login">

                        <h2>Enter Your Username</h2>

                        <p>
                            Enter your username to open your Scratch Pad.
                            If the username does not exist, a new Scratch
                            Pad will be created for you.
                        </p>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Username
                            </Form.Label>

                            <Form.Control
                                type="text"
                                value={enteredUsername}
                                onChange={this.handleUsernameChange}
                                placeholder="Enter your username"
                                maxLength={50}
                            />
                        </Form.Group>

                        <Button
                            variant="success"
                            onClick={this.loadScratchPad}
                            disabled={loading}
                        >
                            {loading
                                ? "Loading..."
                                : "Open Scratch Pad"}
                        </Button>

                        {error && (
                            <p className="scratch-pad-error">
                                {error}
                            </p>
                        )}

                    </div>
                ) : (
                    <div className="scratch-pad-content">

                        <div className="scratch-pad-user">

                            <h2>
                                {username}'s Scratch Pad
                            </h2>

                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={this.changeUser}
                            >
                                Change Username
                            </Button>

                        </div>

                        {message && (
                            <p className="scratch-pad-message">
                                {message}
                            </p>
                        )}

                        <textarea
                            className="scratch-pad-textarea"
                            value={text}
                            onChange={this.handleChange}
                            placeholder="Start typing here..."
                        />

                        <div className="scratch-pad-buttons">

                            <Button
                                variant="success"
                                onClick={this.saveText}
                                disabled={saving}
                            >
                                {saving
                                    ? "Saving..."
                                    : "Save"}
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={this.clearText}
                                disabled={saving}
                            >
                                Clear
                            </Button>

                        </div>

                        {saved && (
                            <p className="scratch-pad-saved">
                                Saved successfully.
                            </p>
                        )}

                        {error && (
                            <p className="scratch-pad-error">
                                {error}
                            </p>
                        )}

                    </div>
                )}

            </div>
        );
    }
}

export default ScratchPad;
