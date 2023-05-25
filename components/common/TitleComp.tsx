import React from 'react';

import { Space, ModalProps, Modal, Input, Table } from 'antd';

interface PickExpertDialogProps extends ModalProps {
  title: any;
  extra?: React.ReactNode;
}

export const TitleComp: React.FC<PickExpertDialogProps> = function (props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        style={{
          display: 'flex',
          lineHeight: '24px',
          marginBottom: 25,
          fontWeight: 'bold',
          fontSize: 16,
          width: '100%',
        }}
      >
        <div
          style={{
            width: 4,
            height: 24,
            borderRadius: 2,
            background: '#FA7436',
            marginRight: 10,
          }}
        ></div>
        {props.title}
      </div>
      <div>{props.extra}</div>
    </div>
  );
};

// export default TitleComp;
