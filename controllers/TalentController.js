const talent = require("../db/models/talent");
const BaseController = require("./BaseController");

class TalentController extends BaseController {
  constructor(
    model,
    talentResumeModel,
    talentWorkExperienceModel,
    talentSkillSetModel,
    talentEducationModel,
    benefitModel,
    employerModel,
    jobListing,
    application
  ) {
    super(model);
    this.talentResumeModel = talentResumeModel;
    this.talentWorkExperienceModel = talentWorkExperienceModel;
    this.talentSkillSetModel = talentSkillSetModel;
    this.talentEducationModel = talentEducationModel;
    this.benefitModel = benefitModel;
    this.employerModel = employerModel;
    this.jobListingModel = jobListing;
    this.applicationModel = application;
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
  // Edit and Update Resume
  async updateResume(req, res) {
    const { talentId } = req.params;
    const { location, title, industry, objective } = req.body;
    try {
      // Check if talent resume exists
      const existingResume = await this.talentResumeModel.findOne({
        where: {
          talentId: talentId,
        },
      });

      if (!existingResume) {
        return res.status(404).json({ error: true, msg: "Resume not found" });
      }

      // Update the resume
      await existingResume.update({
        location: location || existingResume.location,
        title: title || existingResume.title,
        industry: industry || existingResume.industry,
        objective: objective || existingResume.objective,
      });

      // Fetch the updated resume
      const updatedResume = await this.talentResumeModel.findOne({
        where: {
          talentId: talentId,
        },
      });

      return res.json(updatedResume);
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

  //update work experience
  async updateWorkExp(req, res) {
    //check if it's an array, same name as Frontend
    const { workExpData } = req.body;
    try {
      console.log("Request to update work experience");
      console.log(req.body);

      // Iterate over each provided work experience and update it
      for (const workExp of workExpData) {
        await this.talentWorkExperienceModel.update(
          {
            companyName: workExp.companyName,
            position: workExp.position,
            responsibility: workExp.responsibility,
            startMonth: workExp.startMonth,
            startYear: workExp.startYear,
            endMonth: workExp.endMonth,
            endYear: workExp.endYear,
          },
          //pull workexp ID instead of talentId
          {
            where: { id: workExp.id },
          }
        );

        console.log(`Work experience updated`);
      }

      console.log("All work exp updated");

      return res.status(200).json({
        success: true,
        message: "Work experiences updated successfully",
      });
    } catch (err) {
      console.error("Error updating work experiences:", err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async updateWorkExp(req, res) {
  //   const { talentId } = req.params;
  //   const {
  //     companyName,
  //     position,
  //     responsibility,
  //     startMonth,
  //     startYear,
  //     endMonth,
  //     endYear,
  //   } = req.body;
  //   try {
  //     console.log("request to update work experience");
  //     console.log(req.body);
  //     // Check if talent resume exists
  //     const existingWorkExp = await this.talentWorkExperienceModel.findOne({
  //       where: {
  //         talentId: talentId,
  //         //try passing workexpID instead
  //       },
  //     });

  //     if (!existingWorkExp) {
  //       return res.status(404).json({ error: true, msg: "data not found" });
  //     }

  //     console.log("work exp found");

  //     // Update the resume
  //     await existingWorkExp.update({
  //       companyName: companyName || existingWorkExp.companyName,
  //       position: position || existingWorkExp.position,
  //       responsibility: responsibility || existingWorkExp.responsibility,
  //       startMonth: startMonth || existingWorkExp.startMonth,
  //       startYear: startYear || existingWorkExp.startYear,
  //       endMonth: endMonth || existingWorkExp.endMonth,
  //       endYear: endYear || existingWorkExp.endYear,
  //     });

  //     console.log("new work exp updated");

  //     // Fetch the updated work exp
  //     const updatedWorkExp = await this.talentWorkExperienceModel.findOne({
  //       where: {
  //         talentId: talentId,
  //       },
  //     });

  //     console.log("all work exp updated");

  //     return res.json(updatedWorkExp);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async deleteWorkExp(req, res) {
    const { workExpID } = req.params;
    try {
      // Check if the skill set exists
      const workExp = await this.talentWorkExperienceModel.findOne({
        where: {
          id: workExpID,
        },
      });

      if (!workExp) {
        return res.status(404).json({ error: true, msg: "Work not found" });
      }

      // Delete the skill set
      await workExp.destroy();

      return res.json({
        success: true,
        msg: "Work exp set deleted successfully",
      });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
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

  //update work experience
  async updateSkill(req, res) {
    //check if it's an array, same name as Frontend
    const { skillData } = req.body;
    try {
      console.log("Request to update skill");
      console.log(req.body);

      // Iterate over each provided work experience and update it
      for (const skill of skillData) {
        await this.talentSkillSetModel.update(
          {
            skill: skill.skill,
            proficiencyLevel: skill.proficiencyLevel,
          },
          //pull workexp ID instead of talentId
          {
            where: { id: skill.id },
          }
        );

        console.log("skills updated");
      }

      console.log("All skills updated");

      return res.status(200).json({
        success: true,
        message: "skills updated successfully",
      });
    } catch (err) {
      console.error("Error updating skills:", err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteSkill(req, res) {
    const { skillId } = req.params;
    try {
      // Check if the skill set exists
      const skillSet = await this.talentSkillSetModel.findOne({
        where: {
          id: skillId,
        },
      });

      if (!skillSet) {
        return res
          .status(404)
          .json({ error: true, msg: "Skill set not found" });
      }

      // Delete the skill set
      await skillSet.destroy();

      return res.json({ success: true, msg: "Skill set deleted successfully" });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
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

  async updateEdu(req, res) {
    //check if it's an array, same name as Frontend
    const { eduData } = req.body;
    try {
      console.log("Request to update work experience");
      console.log(req.body);

      // Iterate over each provided work experience and update it
      for (const edu of eduData) {
        await this.talentEducationModel.update(
          {
            institution: edu.institution,
            degree: edu.degree,
            fieldOfStudy: edu.fieldOfStudy,
            graduationMonth: edu.graduationMonth,
            graduationYear: edu.graduationYear,
          },
          //pull workexp ID instead of talentId
          {
            where: { id: edu.id },
          }
        );

        console.log(`Education updated`);
      }

      console.log("All edu updated");

      return res.status(200).json({
        success: true,
        message: "Edu updated successfully",
      });
    } catch (err) {
      console.error("Error updating edu:", err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteEdu(req, res) {
    const { educationID } = req.params;
    console.log("EDUCATION ID", educationID);
    try {
      // Check if the education entry exists
      const eduSet = await this.talentEducationModel.findOne({
        where: {
          id: educationID,
        },
      });

      if (!eduSet) {
        return res
          .status(404)
          .json({ error: true, msg: "Education set not found" });
      }

      // Delete the education entry
      await eduSet.destroy();

      return res.json({
        success: true,
        msg: "Education set deleted successfully",
      });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  // <------------------------ BENEFIT ------------------------ >

  async getBenefit(req, res) {
    const { talentId } = req.params;
    try {
      const talent = await this.model.findByPk(talentId, {
        include: this.benefitModel,
      });

      //show benefits only
      const benefits = talent.benefits;
      return res.json(talent);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addBenefit(req, res) {
    const { talentId } = req.params;
    const { selectedBenefitIds } = req.body;
    try {
      // Check if the talent exists
      console.log("did data went through?", req.body);
      const talent = await this.model.findByPk(talentId);
      if (!talent) {
        return res.status(404).json({ error: true, msg: "Talent not found" });
      }
      // Create a new benefit and associate it with the talent
      const addNewBenefit = await this.benefitModel.findAll({
        where: {
          id: selectedBenefitIds,
        },
      });
      await talent.setBenefits(addNewBenefit);
      // Respond with the newly created benefit
      return res.json(addNewBenefit);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // <------------------------ JOB LISTINGS  ------------------------ >

  async getEmAndJobListing(req, res) {
    try {
      // Include associated employer data when querying for job listings
      console.log("hello, get employer and job listing.");
      const jobListing = await this.jobListingModel.findAll({
        include: [
          {
            model: this.employerModel,
            attributes: ["companyName", "description"],
          },
          {
            model: this.benefitModel,
            attributes: ["id", "category"], //benefits modal
            through: {
              attributes: ["jobListingId"], //joint modal
            },
          },
        ],
      });
      // Respond with the job listings including associated employer data
      return res.json(jobListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // <-------------------- APPLICATION  ---------------------- >

  async addApplication(req, res) {
    const { talentId } = req.params;
    const { applicationStatus, jobListingId } = req.body;
    console.log("ADD APPLICATION");
    console.log(applicationStatus);
    console.log(talentId);
    console.log(jobListingId);
    try {
      console.log("passing through");

      //tag to talent ID
      const newApplication = await this.applicationModel.create({
        jobListingId: jobListingId,
        talentId: talentId,
        applicationStatus: applicationStatus,
      });
      console.log("job get posted.");
      // Respond with the new work experience
      return res.json(newApplication);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getApplications(req, res) {
    const { talentId } = req.params;
    try {
      console.log("talent id:", talentId);
      const applications = await this.applicationModel.findAll({
        where: {
          talentId: talentId,
        },
        include: [
          {
            model: this.jobListingModel,
            include: [
              {
                model: this.employerModel,
                attributes: ["companyName"],
              },
            ],
          },
        ],
      });
      console.log(applications);
      // Respond with the applications data
      return res.json(applications);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}

// get all user info under base controller
// delete is not required - user can't delete profile

module.exports = TalentController;
