interface  AppProps{
  headerText:string
}
export default function App({headerText,extraT}:AppProps){
  return(
    <>
    <h1>{headerText}</h1>
    <p>{extra}</p>
    </>

  );
}