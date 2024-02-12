const BaseController = require("./BaseController");

class TalentController extends BaseController {
  constructor(
    model,
    talentResumeModel,
    talentWorkExperienceModel,
    talentSkillSetModel,
    talentEducationModel
  ) {
    super(model);
    this.talentResumeModel = talentResumeModel;
    this.talentWorkExperienceModel = talentWorkExperienceModel;
    this.talentSkillSetModel = talentSkillSetModel;
    this.talentEducationModel = talentEducationModel;
  }

  // Create talent
  async addTalent(req, res) {
    const { firstName, lastName, email, photo } = req.body;
    try {
      // Create new talent
      const newTalent = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        photo: photo,
      });
      // Respond with new talent
      return res.json(newTalent);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit and Update Talent
  async updateTalent(req, res) {
    const { firstName, lastName, email, photo } = req.body;
    const { talentId } = req.params;
    try {
      await this.model.update(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          photo: photo,
        },
        {
          where: {
            id: talentId,
          },
        }
      );
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // <------------------------ RESUME ------------------------ >

  async addResume(req, res) {
    const { talentId } = req.params;
    const { location, industry, title, objective } = req.body;
    try {
      //tag to talent ID
      const newResume = await this.talentResumeModel.create({
        location: location,
        title: title,
        industry: industry,
        objective: objective,
        talentId: talentId,
      });
      // Respond with the new work experience
      return res.json(newResume);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getResume(req, res) {
    const { talentId } = req.params;
    try {
      //tag to talent ID
      const resume = await this.talentResumeModel.findAll({
        where: {
          talentId: talentId,
        },
      });
      // Respond with the new work experience
      return res.json(resume);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // <------------------------ WORK EXPERIENCE ------------------------ >

  async addWorkExperience(req, res) {
    const { talentId } = req.params;
    const {
      companyName,
      position,
      responsibility,
      startMonth,
      startYear,
      endMonth,
      endYear,
    } = req.body;
    try {
      //tag to talent ID
      const newWorkExperience = await this.talentWorkExperienceModel.create({
        companyName: companyName,
        position: position,
        responsibility: responsibility,
        startMonth: startMonth,
        startYear: startYear,
        endMonth: endMonth,
        endYear: endYear,
        talentId: talentId,
      });
      // Respond with the new work experience
      return res.json(newWorkExperience);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getWorkExperiences(req, res) {
    const { talentId } = req.params;
    try {
      //tag to talent ID
      const workExperiences = await this.talentWorkExperienceModel.findAll({
        where: {
          talentId: talentId,
        },
      });
      // Respond with the new work experience
      return res.json(workExperiences);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // <------------------------ SKILL SET ------------------------ >

  async addSkillSet(req, res) {
    const { talentId } = req.params;
    const { skill, proficiencyLevel } = req.body;
    try {
      //tag to talent ID
      const newSkill = await this.talentSkillSetModel.create({
        skill: skill,
        proficiencyLevel: proficiencyLevel,
        talentId: talentId,
      });
      // Respond with the new work experience
      return res.json(newSkill);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getSkillSet(req, res) {
    const { talentId } = req.params;
    try {
      //tag to talent ID
      const skill = await this.talentSkillSetModel.findAll({
        where: {
          talentId: talentId,
        },
      });
      // Respond with the new work experience
      return res.json(skill);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // <------------------------ EDUCATION ------------------------ >

  async addEducation(req, res) {
    const { talentId } = req.params;
    const {
      institution,
      degree,
      fieldOfStudy,
      graduationMonth,
      graduationYear,
    } = req.body;
    try {
      //tag to talent ID
      const newEducation = await this.talentEducationModel.create({
        institution: institution,
        degree: degree,
        fieldOfStudy: fieldOfStudy,
        graduationMonth: graduationMonth,
        graduationYear: graduationYear,
        talentId: talentId,
      });
      // Respond with the new work experience
      return res.json(newEducation);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getEducation(req, res) {
    const { talentId } = req.params;
    try {
      //tag to talent ID
      const education = await this.talentEducationModel.findAll({
        where: {
          talentId: talentId,
        },
      });
      // Respond with the new work experience
      return res.json(education);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

// get all user info under base controller
// delete is not required - user can't delete profile

module.exports = TalentController;
