const Dashboard = () => {
    return {
        <DashboardLayoutStyled className="burnpage">
        <div
          className="top_conatiner burnpage"
          style={{ alignItems: "flex-start" }}
        >
          <div className="info_box filled">
            <h1 className="title">App TOKEN BURN</h1>
            <p className="description medium"></p>
            <BurnButtonBarWrap />
          </div>
          <BurnStatsContainer>
            <BurnStatsTopBar />
            <BurnStatsSupplyBar />
            <BurnStatsSupplyLabelList />
          </BurnStatsContainer>
        </div>
      </DashboardLayoutStyled>
    }
  }

  export default Dashboard;