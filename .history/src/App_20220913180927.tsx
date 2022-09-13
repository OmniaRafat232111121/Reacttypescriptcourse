interface  AppProps{
  headerText:string
  extraText
}
export default function App({headerText,extraText}:AppProps){
  return(
    <>
    <h1>{headerText}</h1>
    <p>{extra}</p>
    </>

  );
}