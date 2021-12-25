import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import {  CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Banner = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);
  return (
    <div className='banner lg:h-screen h-full'>
   
      <div className='container mx-auto h-full px-4 lg:px-0'>
        <div className='flex-col flex lg:flex-row h-full gap-20 justify-between items-center'>
          <div className='max-w-2xl flex flex-col justify-center h-full'>
            <div className='text-3xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-gradientleft to-gradientright bg-clip-text lg:leading-[5rem] lg:pt-24 pt-24'>
              WELCOME TO THE NEEDZ BEEZ!
            </div>
            <p className='py-12 text-primary text-lg'>
            Our founders, out of a love of honey and nature, created Needz Beez. At Needz Beez, we believe in NFTs as an expressive way to provide charitable contributions through utility benefits for the holders. Furthermore, our digital art pieces can develop support networks for charitable contributions and other conservatory efforts.
            </p>
            <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg text-xl font-medium text-white'>
              <a href='http://discord.gg/h6Ha45SG' target='_blank' rel='noopener noreferrer'>
                Join Us
              </a>
            </div>
          </div>
          <div className='card bg-secondary px-8 py-16 rounded-xl'>
          {wallet && (
        <p className='py-8 font-bold text-center text-white text-lg'>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
      )}

          {wallet && <p className=' font-normal text-center text-white text-lg'>Balance: {(balance || 0).toLocaleString()} SOL</p>}

          {wallet && <p className=' font-normal text-center text-white text-lg'>Total Available: {itemsAvailable}</p>}

          {wallet && <p className=' font-normal text-center text-white text-lg'>Redeemed: {itemsRedeemed}</p>}

          {wallet && <p className=' font-normal text-center text-white text-lg'>Remaining: {itemsRemaining}</p>}


{!wallet ? (
          <div >
         <p className='text-center text-sm text-white py-4'>
              Please Connect your wallet
            </p>
        </div>
        ) : (
          <div className='py-4'>
       
          <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg  font-medium text-white mx-auto'>
              <button 
                className='btn mint__btn text-white font-medium'
                disabled={isSoldOut || isMinting || !isActive}
                onClick={onMint}
              >
                
         
            {isSoldOut ? (
              "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                  ) : (
                    "MINT"
                    )
                    ) : (
                      <Countdown
                      date={startDate}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                      />
                      )}
                      </button>
                      </div>
              </div>
        )}
  <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <div className='CountDown__timer px-4 md:px-0 flex gap-16 items-center justify-center py-12 text-white'>
      <div className='text-center'>
        <p className='CountDown__timer-main text-3xl lg:text-3xl font-medium mb-1'>
        {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
        </p>
        
      </div>
    </div>
  );
};


export default Banner;
