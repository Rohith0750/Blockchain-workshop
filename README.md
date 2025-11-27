# 🧾 MultiWill - Digital Inheritance on Blockchain

<div align="center">

![Solidity](https://img.shields.io/badge/Solidity-0.8.0+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Platform](https://img.shields.io/badge/Platform-Ethereum%20Compatible-purple.svg)

</div>

## 📖 Project Description
MultiWill is a decentralized smart contract that enables users to create digital wills on the blockchain. This innovative solution allows you to securely designate crypto assets to specific recipients, ensuring your digital assets are distributed according to your wishes without relying on traditional intermediaries.

---

## 🎯 What It Does
MultiWill leverages blockchain technology to provide a transparent, immutable, and automated inheritance system for cryptocurrency assets. Users can:

- Create multiple wills for different recipients  
- Specify exact amounts to be inherited  
- Allow recipients to claim their inheritance  
- Track the status of all wills in real-time  

---

## ✨ Features
- 🔒 *Secure Storage* – Wills are stored immutably on the blockchain  
- 📊 *Multiple Wills* – Create unlimited wills for different recipients  
- 💰 *Flexible Amounts* – Assign any crypto amount per recipient  
- 🔄 *Claim Management* – Recipients can easily claim funds  
- 📈 *Transparency* – All transactions are publicly verifiable  
- 🛡 *No Intermediaries* – No third-party executors required  
- 📱 *Easy Access* – Simple contract functions  

---

## 🚀 How It Works
1. *Create a Will* – Call createWill() with recipient address and send crypto.  
2. *Will Storage* – Contract stores recipient, amount, and claim status.  
3. *Claiming* – Recipients use claimWill() to withdraw funds.  
4. *Tracking* – View status using read-only functions.

---

## 🛠 Smart Contract Functions

### createWill(address _recipient) public payable
Creates a new will with the specified recipient and sent ETH amount.

### claimWill(address _owner, uint256 _index) public
Allows the recipient to claim funds from a specific will.

### getMyWillsCount() public view returns (uint256)
Returns the number of wills created by the caller.

### getWill(address _owner, uint256 _index) public view
Returns recipient address, amount, and claim status.

### getContractBalance() public view returns (uint256)
Returns total balance held by the smart contract.

---

## 🔗 Deployed Smart Contract Link
You can interact with the deployed contract here:  
https://coston2-explorer.flare.network/tx/0xd93b1ed019fbaaf3aff23fc26e621e88e5b21058ad23c285e7b7dcef20669f02?tab=index

---

## 📜 Smart Contract Code
// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract MultiWill {
//     struct Will {
//         address recipient;
//         uint256 amount;
//         bool claimed;
//     }

//     mapping(address => Will[]) public wills; // Each owner can have multiple wills

//     function createWill(address _recipient) public payable {
//         require(_recipient != address(0), "Invalid recipient address");
//         require(msg.value > 0, "Amount must be greater than zero");

//         wills[msg.sender].push(Will({
//             recipient: _recipient,
//             amount: msg.value,
//             claimed: false
//         }));
//     }

//     function claimWill(address _owner, uint256 _index) public {
//         require(_index < wills[_owner].length, "Invalid will index");

//         Will storage userWill = wills[_owner][_index];
//         require(msg.sender == userWill.recipient, "Only recipient can claim");
//         require(!userWill.claimed, "Already claimed");
//         require(userWill.amount > 0, "No funds to claim");

//         userWill.claimed = true;
//         payable(userWill.recipient).transfer(userWill.amount);
//     }

//     function getMyWillsCount() public view returns (uint256) {
//         return wills[msg.sender].length;
//     }

//     function getWill(address _owner, uint256 _index) public view returns (address recipient, uint256 amount, bool claimed) {
//         require(_index < wills[_owner].length, "Invalid will index");
//         Will memory userWill = wills[_owner][_index];
//         return (userWill.recipient, userWill.amount, userWill.claimed);
//     }

//     function getContractBalance() public view returns (uint256) {
//         return address(this).balance;
//     }
// }
