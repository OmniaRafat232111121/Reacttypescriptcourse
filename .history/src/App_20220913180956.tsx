interface  AppProps{
  headerText:string
  extraText:string
}
export default function App({headerText,extraText}:AppProps){
  return(
    <>
    <h1>{headerText}</h1>
    <p>{extraText&&<p>{extraText}</p>}</p>
    </>

  );
}