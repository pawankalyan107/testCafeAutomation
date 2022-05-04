import { Selector } from "testcafe";

fixture`Automate the PG registartion form`
  .page`https://www.mygreatlearning.com/pg-program-data-science-online-course`;

test("Click on Apply now", async (t) => {
  await t.click(".grey-transparent-button");
  await t
    .typeText("#name", "radhey")
    .typeText("#phone", "9123456780")
    .typeText("#email", "name@gmail.com")
    .typeText("#myCity", "Hyderabad")
    .click("#app_step_1");

  const degree = Selector("#grad_degree");
  await t.click(degree);
  const degreeOption = degree.find("option");
  await t
    .click(degreeOption.withText("B.E./B.Tech."))
    .expect(degree.value)
    .eql("B.E./B.Tech.")
    .typeText("#grad_specialization", "Computer Science")
    .typeText("#grad_college", "Bundhelkhand University");

  const year = Selector("#grad_year");
  await t.click(year);
  const yearOption = year.find("option");
  await t.click(yearOption.withText("2021")).expect(year.value).eql("2021");

  await t.typeText("#grad_cgpa", "100");
  await t.click("#add_pg_details");

  const pgDegree = Selector("#pg_degree");
  await t.click(pgDegree);
  const pgOption = pgDegree.find("option");
  await t
    .click(pgOption.withText("M.E./M.Tech."))
    .expect(pgDegree.value)
    .eql("M.E./M.Tech.");
  await t
    .typeText("#pg_specialization", "Computer Science")
    .typeText("#pg_college", "Great Learning University");
  const pgYear = Selector("#pg_year");
  await t.click(pgYear);
  const pgYearOption = pgYear.find("option");
  await t.click(pgYearOption.withText("2022")).expect(pgYear.value).eql("2022");
  await t
    .typeText("#pg_cgpa", "100")
    .typeText("#cat_score", "1")
    .typeText("#gmat_score", "200")
    .typeText("#gre_score", "130")
    .click("#professional_section");
  const experience = Selector("#experience");
  await t.click(experience);
  const expYearOption = experience.find("option");
  await t
    .click(expYearOption.withText("1-2 Years"))
    .expect(experience.value)
    .eql("1-2 Years");
  await t
    .click("#prof_details_end")
    .typeText("#curr_org", "Great Learning")
    .click(
      "#organisation_details > div:nth-child(4) > div > div > label > span"
    );
  const month = Selector("#from_month1");
  await t.click(month);
  const monthOption = month.find("option");
  await t.click(monthOption.withText("January"));
  // .expect(month.value)
  // .eql("January");

  const year_1 = Selector("#from_year1");
  await t.click(year_1);
  const yearOption_1 = year_1.find("option");
  await t
    .click(yearOption_1.withText("2021"))
    .expect(year_1.value)
    .eql("2021")
    .typeText("#curr_designation", "Automation Tester");
  const industry = Selector("#industry");
  await t.click(industry);
  const industryOption = industry.find("option");
  await t
    .click(industryOption.withText("Automobile"))
    .expect(industry.value)
    .eql("Automobile");
  await t
    .click("#prof_details_end")
    .typeText("#new_question1", "radhey shyam")
    .click("#step_4 > div:nth-child(6) > div > div > label > span")
    .click("#submit_app")
    .typeText("#password", 'password');
});
