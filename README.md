# share-vega-dashboard
Front-end for a specialized platform for creating, editing and sharing data visualizations created with Vega and Vega-Lite.

# Installing dependencies

Run `npm install` for installing libs and other dependencies.

# Running app

Run `npm start` to start app. Note that you must have one API instance running too. Check [share-vega](https://github.com/italo-batista/share-vega) 
to see how deploy the back-end locally :)

---

For creating new Visualizations, you can make some POST requests to http://localhost:8080/api/visualization using the following pattern:

```{json}
{
  "creator": <user_id>,
  "title": <vis_title>,
  "gist_link": <vis_gist_url>
}
```

An example:

```{json}
{
  "creator":"5bb8f05d6e52fb546a930f96",
  "title": "Bar Chart",
  "gist_link": "https://gist.githubusercontent.com/italo-batista/fd17f3772e0f3cc0da5e25d3d7409731/raw/edfee24b0a30ddfd50ea99eddf347cb198a703ae/Flipped%2520Bar%2520Chart.json"
}
```
