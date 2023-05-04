import React, { useState } from 'react';
import { ethers } from 'ethers';

const btnStyle = {
  backgroundColor: 'orange',
  color: 'white',
  borderRadius: '15px',
  width: '100px',
  height: '40px',
  marginRight: '10px',
};

function ConnectBtn(props) {
  const [address, setAddress] = useState(null);

  const handleConnect = async () => {
    try {
      // Connect to Ethereum network
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.enable();
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Set state variable
      setAddress(address);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleConnect} style={btnStyle}>
      {address ? address.substring(0, 6) + '...' + address.substring(38) : props.btnName}
    </button>
  );
}

export default ConnectBtn;
