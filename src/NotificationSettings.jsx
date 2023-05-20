import React, { useState } from "react";
import { connect } from "react-redux";

const NotificationSettings = ({ isNotificationEnabled, saveSettings }) => {
  const [notificationState, setNotificationState] = useState({
    isEnabled: false,
  });

  const toggleNotification = () => {
    setNotificationState((prevState) => ({
      isEnabled: !prevState.isEnabled,
    }));
  };

  const handleSaveSettings = () => {
    saveSettings(notificationState);
    const message = notificationState.isEnabled
      ? "Se ha guardado la selección de activar las notificaciones"
      : "Se ha guardado la selección de desactivar las notificaciones";
    alert(message);
  };

  const getStatusText = () => {
    return notificationState.isEnabled ? "Activas" : "Inactivas";
  };

  const getButtonLabel = () => {
    return notificationState.isEnabled
      ? "Desactivar notificaciones"
      : "Activar notificaciones";
  };

  return (
    <div className="notification-settings">
      <h1>
        ¿Desea recibir notificaciones sobre la serie Rick y Morty en su email?
      </h1>
      <p>
        Status: <b>{getStatusText()}</b>
      </p>
      <br />
      <button onClick={toggleNotification}>{getButtonLabel()}</button>
      <br />
      <br />
      <br />
      <button onClick={handleSaveSettings} className="save-button">
        Guardar
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isNotificationEnabled: state.n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveSettings: (settings) =>
      dispatch({ type: "SAVE_NOTIFICATION_SETTINGS", settings }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSettings);
