class MyCoursesPage {
    get myCoursesHeader() { return $('//h1') }
    get coursesDetailsMessage() { return $('//div[text()="You have not enrolled to any courses."]') }
}
export default new MyCoursesPage()